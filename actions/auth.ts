"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAuthActions } from "@insforge/sdk/ssr";

function getOAuthRedirectUrl() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  return new URL("/api/auth/callback", appUrl).toString();
}

async function startOAuth(provider: "google" | "github") {
  const cookieStore = await cookies();
  const auth = createAuthActions({ cookies: cookieStore });
  const { data, error } = await auth.signInWithOAuth(provider, {
    redirectTo: getOAuthRedirectUrl(),
    skipBrowserRedirect: true,
  });

  if (error || !data?.url || !data.codeVerifier) {
    throw new Error(error?.message ?? `Unable to start ${provider} sign in`);
  }

  cookieStore.set("insforge_code_verifier", data.codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  redirect(data.url);
}

export async function signInWithGoogle() {
  await startOAuth("google");
}

export async function signInWithGitHub() {
  await startOAuth("github");
}

export async function signOut() {
  const auth = createAuthActions({ cookies: await cookies() });
  const { error } = await auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/");
}