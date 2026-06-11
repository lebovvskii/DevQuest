import { Tag } from "antd";

import styles from "./styles.module.scss";
import type { BadgeProps } from "./types";

export const Badge = ({ tone = "neutral", children }: BadgeProps) => {
  return (
    <Tag className={styles.root} data-tone={tone}>
      {children}
    </Tag>
  );
};
