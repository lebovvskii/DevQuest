import type { PropsWithChildren, ReactNode } from "react";

export type PageLayoutProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
}>;
