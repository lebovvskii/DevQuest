import { Card, Progress } from "antd";

import styles from "./styles.module.scss";
import type { MetricCardProps } from "./types";

export const MetricCard = ({ label, value, hint, progress }: MetricCardProps) => {
  return (
    <Card className={styles.root}>
      <div className={styles.body}>
        <div className={styles.head}>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
        </div>

        {typeof progress === "number" ? <Progress percent={progress} showInfo={false} strokeLinecap="round" /> : null}

        <p className={styles.hint}>{hint}</p>
      </div>
    </Card>
  );
};
