import type { BadgeTone } from "@/components/presentation/Badge/types";

export type OverviewStat = {
  label: string;
  value: string;
  hint: string;
  progress: number;
};

export type TopicId = "javascript-runtime" | "networking-browser-apis" | "rendering-reconciliation";

export type RoadmapTopic = {
  id: TopicId;
  name: string;
  level: string;
  tone: BadgeTone;
  completion: number;
  note: string;
};

export type TopicDetails = RoadmapTopic & {
  description: string;
  questionCount: number;
  estimatedMinutes: number;
  focusAreas: string[];
};

export type InterviewQueueItem = {
  id: string;
  title: string;
  duration: string;
  focus: string;
};

export type ProgressHighlight = {
  label: string;
  value: number | string;
};

export type DashboardSummary = {
  overviewStats: OverviewStat[];
  roadmapTopics: RoadmapTopic[];
  interviewQueue: InterviewQueueItem[];
  progressHighlights: ProgressHighlight[];
};
