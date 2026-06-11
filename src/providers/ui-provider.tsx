"use client";

import { App, ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";

import { antdTheme } from "@/lib/antd-theme";

export const UiProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider theme={antdTheme}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
