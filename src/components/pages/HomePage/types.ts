import type { BadgeTone } from "@/components/presentation/Badge/types";

export type OverviewStat = {
  label: string;
  value: string;
  hint: string;
  progress: number;
};

export type RoadmapTopic = {
  name: string;
  level: string;
  tone: BadgeTone;
  completion: number;
  note: string;
};

export type InterviewQueueItem = {
  title: string;
  duration: string;
  focus: string;
};

export type ProgressHighlight = {
  label: string;
  value: number | string;
};
