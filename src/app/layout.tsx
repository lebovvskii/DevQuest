import "./reset.css";
import "./globals.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";

import { UiProvider } from "@/providers/ui-provider";

export const metadata: Metadata = {
  title: "DevQuest",
  description: "Frontend interview preparation workspace built with Next.js.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <UiProvider>{children}</UiProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
