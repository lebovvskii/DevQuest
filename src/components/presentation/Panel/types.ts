import type { ReactNode } from "react";

export type PanelProps = {
  title: string;
  description?: string;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
};
