import type {
  InterviewQueueItem,
  OverviewStat,
  ProgressHighlight,
  RoadmapTopic,
} from "./types";

export const overviewStats: OverviewStat[] = [
  {
    label: "Readiness",
    value: "68%",
    hint: "Core frontend topics are covered, but async rendering and browser internals need repetition.",
    progress: 68,
  },
  {
    label: "Practice streak",
    value: "4 days",
    hint: "Consistency is good enough to start measuring weak areas instead of collecting theory.",
    progress: 80,
  },
  {
    label: "Mock sessions",
    value: "12",
    hint: "Enough sessions to build a first scoring model and compare progress topic by topic.",
    progress: 54,
  },
];

export const roadmapTopics: RoadmapTopic[] = [
  {
    name: "Rendering and reconciliation",
    level: "Middle",
    tone: "warning",
    completion: 56,
    note: "Hydration, RSC boundaries, and render scheduling are still unstable in spoken answers.",
  },
  {
    name: "JavaScript runtime and event loop",
    level: "Strong",
    tone: "success",
    completion: 82,
    note: "Keep this in active rotation because it is high-frequency interview material.",
  },
  {
    name: "Networking and browser APIs",
    level: "Warm-up",
    tone: "info",
    completion: 41,
    note: "Good place for short daily drills before deeper mock interview sessions.",
  },
];

export const interviewQueue: InterviewQueueItem[] = [
  {
    title: "Quick React systems round",
    duration: "15 min",
    focus: "State boundaries, controlled inputs, memoization tradeoffs",
  },
  {
    title: "Browser internals checkpoint",
    duration: "25 min",
    focus: "Event loop, rendering pipeline, layout and paint cost",
  },
  {
    title: "Frontend architecture review",
    duration: "35 min",
    focus: "SSR choices, API boundaries, feature decomposition",
  },
];

export const progressHighlights: ProgressHighlight[] = [
  {
    label: "Topics with stable answers",
    value: 9,
  },
  {
    label: "Topics still marked weak",
    value: 4,
  },
  {
    label: "Average self-review score",
    value: "7.2 / 10",
  },
];
