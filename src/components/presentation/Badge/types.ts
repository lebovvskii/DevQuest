import type { PropsWithChildren } from "react";

export type BadgeTone = "neutral" | "info" | "success" | "warning";

export type BadgeProps = PropsWithChildren<{
  tone?: BadgeTone;
}>;
