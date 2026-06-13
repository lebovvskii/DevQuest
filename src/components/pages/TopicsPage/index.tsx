import Link from "next/link";

import { PageLayout } from "@/components/presentation/PageLayout";

import styles from "./styles.module.scss";
import type { TopicsPageProps } from "./types";

export const TopicsPage = ({ topics }: TopicsPageProps) => {
  return (
    <PageLayout
      eyebrow="Topics"
      title="Practice roadmap"
      description="Server-rendered topic data for interview preparation. Start broad, then drill into the weak areas."
    >
      <section className={styles.content} aria-label="Topic roadmap">
        <div className={styles.summary}>
          <span className={styles.summaryLabel}>Topics</span>
          <strong className={styles.summaryValue}>{topics.length}</strong>
          <p className={styles.summaryText}>Grouped by current readiness and interview usefulness.</p>
        </div>

        <div className={styles.list}>
          {topics.map((topic) => (
            <Link key={topic.id} className={styles.item} href={`/topics/${topic.id}`}>
              <div className={styles.itemMain}>
                <div className={styles.itemHead}>
                  <h2 className={styles.itemTitle}>{topic.name}</h2>
                  <span className={styles.badge} data-tone={topic.tone}>
                    {topic.level}
                  </span>
                </div>
                <p className={styles.itemNote}>{topic.note}</p>
              </div>

              <div className={styles.itemMeta}>
                <span className={styles.metaLabel}>Readiness</span>
                <span className={styles.metaValue}>{topic.completion}%</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};
