"use client";

import { useTransition } from "react";
import posthog from "posthog-js";
import { signOut } from "@/actions/auth";

export function LogoutButton({ className }: { className?: string }) {
  const [, startTransition] = useTransition();

  const handleClick = () => {
    posthog.capture("user_signed_out");
    posthog.reset();
    startTransition(() => {
      void signOut();
    });
  };

  return (
    <button className={className} type="button" onClick={handleClick}>
      Log out <span aria-hidden="true">↗</span>
    </button>
  );
}
