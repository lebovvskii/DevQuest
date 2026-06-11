import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#59636e",
    colorInfo: "#59636e",
    colorSuccess: "#5f765f",
    colorWarning: "#8a7356",
    colorError: "#9a5a56",
    colorText: "#1d1d1f",
    colorTextSecondary: "#6e6e73",
    colorBorderSecondary: "rgba(60, 60, 67, 0.14)",
    colorBgBase: "#f6f6f4",
    colorBgContainer: "#ffffff",
    fontFamily: "var(--font-sans)",
    borderRadius: 12,
    borderRadiusLG: 16,
    controlHeight: 40,
    boxShadowTertiary: "0 10px 28px rgba(0, 0, 0, 0.06)",
  },
  components: {
    Button: {
      fontWeight: 600,
      primaryShadow: "none",
    },
    Card: {
      headerHeight: 56,
    },
    Layout: {
      bodyBg: "transparent",
      headerBg: "transparent",
    },
    Progress: {
      defaultColor: "#59636e",
      remainingColor: "rgba(60, 60, 67, 0.12)",
    },
    Tag: {
      defaultBg: "rgba(118, 118, 128, 0.1)",
      defaultColor: "#3a3a3c",
    },
  },
};
