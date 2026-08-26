import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createInsForgeServerClient } from "@/lib/insforge-server";
import { PostHogIdentify } from "@/components/posthog-identify";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobPilot | Make your next move clearer",
  description: "Find the roles that fit, understand your match, and apply with confidence.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  let userId: string | undefined;
  try {
    const insforge = await createInsForgeServerClient();
    const { data } = await insforge.auth.getCurrentUser();
    userId = data?.user?.id;
  } catch {
    // best-effort; never break the layout on auth errors
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {userId && <PostHogIdentify userId={userId} />}
        {children}
      </body>
    </html>
  );
}
