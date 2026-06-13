import { Button } from "antd";

import { PageLayout } from "@/components/presentation/PageLayout";

import styles from "./styles.module.scss";
import type { InterviewStartPageProps } from "./types";

export const InterviewStartPage = ({
  topics,
  presets,
  defaultTopicId,
  initialTopicId,
  startInterviewAction,
}: InterviewStartPageProps) => {
  const selectedTopicId = topics.some((topic) => topic.id === initialTopicId) ? initialTopicId : defaultTopicId;

  return (
    <PageLayout
      eyebrow="Interview flow"
      title="Start a new session"
      description="Keep the start surface server-driven. The UI only selects a topic and depth, while the session contract stays on the server."
    >
      <section className={styles.content}>
        <form action={startInterviewAction} className={styles.form}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Topic</h2>
              <p className={styles.sectionDescription}>Choose the area you want to rehearse first.</p>
            </div>

            <select className={styles.select} defaultValue={selectedTopicId} name="topicId">
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Session depth</h2>
              <p className={styles.sectionDescription}>Presets map directly to server-side session creation.</p>
            </div>

            <div className={styles.presetGrid}>
              {presets.map((preset, index) => (
                <label key={preset.mode} className={styles.presetOption}>
                  <input
                    className={styles.presetInput}
                    defaultChecked={index === 0}
                    name="mode"
                    type="radio"
                    value={preset.mode}
                  />
                  <span className={styles.presetCard}>
                    <span className={styles.presetTitle}>{preset.title}</span>
                    <span className={styles.presetMeta}>
                      {preset.questionCount} questions · {preset.estimatedMinutes} min
                    </span>
                    <p className={styles.presetDescription}>{preset.description}</p>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.submitRow}>
            <Button htmlType="submit" size="large" type="primary">
              Start interview
            </Button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
};
