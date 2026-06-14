import "./reset.css";
import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata, Viewport } from "next";

import { AppShell } from "@/components/presentation/AppShell";
import { UiProvider } from "@/providers/ui-provider";

export const metadata: Metadata = {
  title: "DevQuest — Interview prep workspace",
  description: "A focused frontend interview preparation workspace: track readiness, drill topics, and run mock sessions.",
};

export const viewport: Viewport = {
  themeColor: "#f6f6f4",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="bg-background">
      <body>
        <AntdRegistry>
          <UiProvider>
            <AppShell>{children}</AppShell>
          </UiProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
