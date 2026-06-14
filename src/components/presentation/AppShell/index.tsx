"use client";

import {
  AppstoreOutlined,
  CloseOutlined,
  MenuOutlined,
  ReadOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import type { AppShellNavItem, AppShellProps } from "./types";

const navItems: AppShellNavItem[] = [
  {
    href: "/",
    label: "Dashboard",
    description: "Readiness overview",
    icon: <AppstoreOutlined />,
    match: (pathname) => pathname === "/",
  },
  {
    href: "/topics",
    label: "Topics",
    description: "Practice roadmap",
    icon: <ReadOutlined />,
    match: (pathname) => pathname.startsWith("/topics"),
  },
  {
    href: "/interview/start",
    label: "Interview",
    description: "Run a session",
    icon: <ThunderboltOutlined />,
    match: (pathname) => pathname.startsWith("/interview"),
  },
];

const SidebarContent = ({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) => {
  return (
    <div className={styles.sidebarInner}>
      <Link aria-label="DevQuest home" className={styles.brand} href="/" onClick={onNavigate}>
        <span aria-hidden="true" className={styles.brandMark}>
          DQ
        </span>
        <span className={styles.brandCopy}>
          <span className={styles.brandName}>DevQuest</span>
          <span className={styles.brandTag}>Interview prep</span>
        </span>
      </Link>

      <nav aria-label="Primary" className={styles.nav}>
        <span className={styles.navLabel}>Workspace</span>
        {navItems.map((item) => {
          const active = item.match(pathname);

          return (
            <Link
              key={item.href}
              aria-current={active ? "page" : undefined}
              className={classNames(styles.navItem, { [styles.navItemActive]: active })}
              href={item.href}
              onClick={onNavigate}
            >
              <span aria-hidden="true" className={styles.navIcon}>
                {item.icon}
              </span>
              <span className={styles.navText}>
                <span className={styles.navItemLabel}>{item.label}</span>
                <span className={styles.navItemDescription}>{item.description}</span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <Link className={styles.cta} href="/interview/start" onClick={onNavigate}>
          <ThunderboltOutlined aria-hidden="true" />
          Start interview
        </Link>
        <p className={styles.footerNote}>Short sessions keep your recall sharp.</p>
      </div>
    </div>
  );
};

export const AppShell = ({ children }: AppShellProps) => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const activeItem = navItems.find((item) => item.match(pathname));

  return (
    <div className={styles.shell}>
      <aside aria-label="Sidebar navigation" className={styles.sidebar}>
        <SidebarContent pathname={pathname} />
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          <Link aria-label="DevQuest home" className={styles.topbarBrand} href="/">
            <span aria-hidden="true" className={styles.brandMark}>
              DQ
            </span>
            <span className={styles.topbarTitle}>{activeItem?.label ?? "DevQuest"}</span>
          </Link>
          <button
            aria-label="Open navigation"
            className={styles.menuButton}
            onClick={() => setDrawerOpen(true)}
            type="button"
          >
            <MenuOutlined />
          </button>
        </header>

        <div className={styles.content}>{children}</div>
      </div>

      <Drawer
        className={styles.drawer}
        closeIcon={<CloseOutlined />}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        placement="left"
        styles={{ body: { padding: 0 }, wrapper: { width: 280 } }}
        title={null}
      >
        <SidebarContent onNavigate={() => setDrawerOpen(false)} pathname={pathname} />
      </Drawer>
    </div>
  );
};
