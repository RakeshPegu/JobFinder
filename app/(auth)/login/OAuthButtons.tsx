"use client";

import posthog from "posthog-js";
import { signInWithGoogle, signInWithGitHub } from "@/actions/auth";

export function OAuthButtons() {
  const handleSignIn = (provider: "google" | "github") => {
    posthog.capture("sign_in_started", { provider });
  };

  return (
    <div className="oauth-actions">
      <form action={signInWithGoogle}>
        <button
          className="oauth-button"
          type="submit"
          onClick={() => handleSignIn("google")}
        >
          <span className="oauth-icon" aria-hidden="true">G</span>
          <span>Continue with Google</span>
          <span aria-hidden="true">↗</span>
        </button>
      </form>
      <form action={signInWithGitHub}>
        <button
          className="oauth-button"
          type="submit"
          onClick={() => handleSignIn("github")}
        >
          <span className="oauth-icon oauth-icon-github" aria-hidden="true">GH</span>
          <span>Continue with GitHub</span>
          <span aria-hidden="true">↗</span>
        </button>
      </form>
    </div>
  );
}
