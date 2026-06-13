import type { DashboardSummary, TopicDetails } from "./types";

export const topicDetails: TopicDetails[] = [
  {
    id: "rendering-reconciliation",
    name: "Rendering and reconciliation",
    level: "Middle",
    tone: "warning",
    completion: 56,
    note: "Hydration, RSC boundaries, and render scheduling are still unstable in spoken answers.",
    description: "Practice how React schedules work, reconciles trees, hydrates server output, and exposes tradeoffs.",
    questionCount: 18,
    estimatedMinutes: 35,
    focusAreas: ["Hydration", "Server Components", "Scheduling", "Memoization boundaries"],
  },
  {
    id: "javascript-runtime",
    name: "JavaScript runtime and event loop",
    level: "Strong",
    tone: "success",
    completion: 82,
    note: "Keep this in active rotation because it is high-frequency interview material.",
    description: "Strengthen event loop explanations, async ordering, browser queues, and runtime constraints.",
    questionCount: 22,
    estimatedMinutes: 30,
    focusAreas: ["Microtasks", "Macrotasks", "Promise ordering", "Runtime limits"],
  },
  {
    id: "networking-browser-apis",
    name: "Networking and browser APIs",
    level: "Warm-up",
    tone: "info",
    completion: 41,
    note: "Good place for short daily drills before deeper mock interview sessions.",
    description: "Cover browser APIs that commonly appear in practical frontend system design discussions.",
    questionCount: 14,
    estimatedMinutes: 25,
    focusAreas: ["Fetch", "Caching", "Storage", "AbortController"],
  },
];

export const dashboardSummary: DashboardSummary = {
  overviewStats: [
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
  ],
  roadmapTopics: topicDetails.map((topic) => ({
    id: topic.id,
    name: topic.name,
    level: topic.level,
    tone: topic.tone,
    completion: topic.completion,
    note: topic.note,
  })),
  interviewQueue: [
    {
      id: "quick-react-systems",
      title: "Quick React systems round",
      duration: "15 min",
      focus: "State boundaries, controlled inputs, memoization tradeoffs",
    },
    {
      id: "browser-internals-checkpoint",
      title: "Browser internals checkpoint",
      duration: "25 min",
      focus: "Event loop, rendering pipeline, layout and paint cost",
    },
    {
      id: "frontend-architecture-review",
      title: "Frontend architecture review",
      duration: "35 min",
      focus: "SSR choices, API boundaries, feature decomposition",
    },
  ],
  progressHighlights: [
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
  ],
};
