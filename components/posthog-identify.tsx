"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

interface PostHogIdentifyProps {
  userId: string;
}

export function PostHogIdentify({ userId }: PostHogIdentifyProps) {
  useEffect(() => {
    posthog.identify(userId);
  }, [userId]);
  return null;
}
