import Link from "next/link";

import { PageLayout } from "@/components/presentation/PageLayout";

import styles from "./styles.module.scss";
import type { TopicDetailsPageProps } from "./types";

export const TopicDetailsPage = ({ topic }: TopicDetailsPageProps) => {
  return (
    <PageLayout eyebrow="Topic details" title={topic.name} description={topic.description}>
      <section className={styles.content}>
        <Link className={styles.backLink} href="/topics">
          {"<"} Back to topics
        </Link>

        <Link className={styles.startLink} href={`/interview/start?topicId=${topic.id}`}>
          Start session
        </Link>

        <div className={styles.overview}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Readiness</span>
            <strong className={styles.metricValue}>{topic.completion}%</strong>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Questions</span>
            <strong className={styles.metricValue}>{topic.questionCount}</strong>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Estimate</span>
            <strong className={styles.metricValue}>{topic.estimatedMinutes} min</strong>
          </div>
        </div>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>Focus areas</h2>
            <span className={styles.badge} data-tone={topic.tone}>
              {topic.level}
            </span>
          </div>

          <ul className={styles.focusList}>
            {topic.focusAreas.map((focusArea) => (
              <li key={focusArea} className={styles.focusItem}>
                {focusArea}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </PageLayout>
  );
};
