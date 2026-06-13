import { Badge } from "@/components/presentation/Badge";
import { PageLayout } from "@/components/presentation/PageLayout";
import { Panel } from "@/components/presentation/Panel";

import styles from "./styles.module.scss";
import type { InterviewSessionPageProps } from "./types";

export const InterviewSessionPage = ({ session }: InterviewSessionPageProps) => {
  return (
    <PageLayout
      eyebrow="Interview session"
      title={session.topicName}
      description="This page is server-rendered from the created session record, so later we can layer timers, drafts, and scoring without changing the contract."
    >
      <section className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.summaryMeta}>
            <Badge tone="info">{session.modeTitle}</Badge>
            <Badge tone="neutral">{session.status}</Badge>
          </div>
          <p className={styles.summaryText}>{session.topicDescription}</p>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Questions</span>
            <strong className={styles.statValue}>{session.questionCount}</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Estimated time</span>
            <strong className={styles.statValue}>{session.estimatedMinutes} min</strong>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Created</span>
            <strong className={styles.statValue}>{new Date(session.createdAt).toLocaleDateString("en-US")}</strong>
          </div>
        </div>

        <div className={styles.grid}>
          <Panel
            description="These prompts are seeded on the server and can later be replaced by AI-generated sequences or database-backed plans."
            title="Prompt queue"
          >
            <ol className={styles.promptList}>
              {session.prompts.map((prompt, index) => (
                <li key={prompt.id} className={styles.promptItem}>
                  <span className={styles.promptIndex}>
                    Q{index + 1} · {prompt.focusArea}
                  </span>
                  <p className={styles.promptQuestion}>{prompt.question}</p>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel
            description="These are the anchors for later scoring, notes, and answer review."
            title="Focus areas"
          >
            <ul className={styles.focusList}>
              {session.focusAreas.map((focusArea) => (
                <li key={focusArea} className={styles.focusItem}>
                  {focusArea}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
    </PageLayout>
  );
};
