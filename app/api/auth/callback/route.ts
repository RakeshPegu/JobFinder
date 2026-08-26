import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { createAuthActions } from "@insforge/sdk/ssr";
import { getPostHogClient } from "@/lib/posthog-server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("insforge_code");
  const oauthError = request.nextUrl.searchParams.get("error");
  const cookieStore = await cookies();
  const verifier = cookieStore.get("insforge_code_verifier")?.value;

  if (oauthError || !code || !verifier) {
    const posthog = getPostHogClient();
    if (posthog) {
      posthog.capture({
        distinctId: crypto.randomUUID(),
        event: "sign_in_failed",
        properties: { reason: oauthError ? "oauth_error" : "missing_params" },
      });
      await posthog.flush();
    }
    return NextResponse.redirect(new URL("/login?error=oauth", request.url));
  }

  const response = NextResponse.redirect(new URL("/profile", request.url));
  const auth = createAuthActions({
    requestCookies: request.cookies,
    responseCookies: response.cookies,
  });
  const { data, error } = await auth.exchangeOAuthCode(code, verifier);

  if (error || !data) {
    console.error("[auth/callback] OAuth exchange failed", error);
    const posthog = getPostHogClient();
    if (posthog) {
      posthog.capture({
        distinctId: crypto.randomUUID(),
        event: "sign_in_failed",
        properties: { reason: "exchange_failed" },
      });
      await posthog.flush();
    }
    return NextResponse.redirect(new URL("/login?error=oauth", request.url));
  }

  const posthog = getPostHogClient();
  if (posthog) {
    const userId = data.user.id;
    posthog.identify({
      distinctId: userId,
      properties: { email: data.user.email },
    });
    posthog.capture({
      distinctId: userId,
      event: "sign_in_completed",
    });
    await posthog.flush();
  }

  response.cookies.delete("insforge_code_verifier");
  return response;
}