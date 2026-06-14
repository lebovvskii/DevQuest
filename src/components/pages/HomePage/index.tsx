"use client";

import { Button, Progress, Space } from "antd";
import Link from "next/link";

import { Badge } from "@/components/presentation/Badge";
import { MetricCard } from "@/components/presentation/MetricCard";
import { PageLayout } from "@/components/presentation/PageLayout";
import { Panel } from "@/components/presentation/Panel";

import { interviewQueue, overviewStats, progressHighlights, roadmapTopics } from "./mocks";
import styles from "./styles.module.scss";

export const DashboardHome = () => {
  return (
    <PageLayout
      eyebrow="Workspace"
      title="You're 68% ready"
      description="Keep the session short, then review the weak answers while the context is still fresh."
      actions={
        <Space wrap>
          <Button href="/topics">
            Browse topics
          </Button>
          <Button href="/interview/start" type="primary">
            Start interview
          </Button>
        </Space>
      }
    >
      <div className={styles.content}>
        <section aria-label="Training overview" className={styles.stats}>
          {overviewStats.map((stat) => (
            <MetricCard key={stat.label} {...stat} />
          ))}
        </section>

        <div className={styles.columns}>
          <Panel
            className={styles.primaryPanel}
            description="Dense enough for real work, but structured like a native grouped list."
            title="Priority roadmap"
          >
            <div className={styles.roadmapList}>
              {roadmapTopics.map((topic) => (
                <article key={topic.name} className={styles.roadmapItem}>
                  <div className={styles.roadmapCopy}>
                    <div className={styles.roadmapHead}>
                      <h3 className={styles.roadmapTitle}>{topic.name}</h3>
                      <Badge tone={topic.tone}>{topic.level}</Badge>
                    </div>
                    <p className={styles.roadmapNote}>{topic.note}</p>
                  </div>

                  <div className={styles.roadmapMeta}>
                    <span className={styles.roadmapMetaLabel}>Coverage</span>
                    <Progress percent={topic.completion} showInfo={false} size="small" />
                    <span className={styles.roadmapMetaValue}>{topic.completion}% ready</span>
                  </div>
                </article>
              ))}
            </div>
          </Panel>

          <div className={styles.secondaryGrid}>
            <Panel
              description="Short sessions first, then deeper architecture prompts."
              extra={
                <Link className={styles.inlineLink} href="/interview/start">
                  Open flow
                  <span aria-hidden="true">{">"}</span>
                </Link>
              }
              title="Interview cycle"
            >
              <ul className={styles.sessionList}>
                {interviewQueue.map((session) => (
                  <li key={session.title} className={styles.sessionListItem}>
                    <div className={styles.sessionHead}>
                      <span className={styles.sessionTitle}>{session.title}</span>
                      <Badge tone="info">{session.duration}</Badge>
                    </div>
                    <p className={styles.sessionFocus}>{session.focus}</p>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel description="Small signals for the future API-backed dashboard." title="Progress">
              <div className={styles.summaryList}>
                {progressHighlights.map((item) => (
                  <div key={item.label} className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>{item.label}</span>
                    <span className={styles.summaryValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
