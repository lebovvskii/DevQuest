import type { PropsWithChildren, ReactNode } from "react";

export type AppShellNavItem = {
  href: string;
  label: string;
  description: string;
  icon: ReactNode;
  match: (pathname: string) => boolean;
};

export type AppShellProps = PropsWithChildren;
