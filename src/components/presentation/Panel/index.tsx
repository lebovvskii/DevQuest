import { Card } from "antd";
import classNames from "classnames";

import styles from "./styles.module.scss";
import type { PanelProps } from "./types";

export const Panel = ({ title, description, extra, children, className }: PanelProps) => {
  return (
    <Card
      className={classNames(styles.root, className)}
      extra={extra}
      styles={{ body: { height: "100%" } }}
      title={
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>
      }
    >
      {children}
    </Card>
  );
};
