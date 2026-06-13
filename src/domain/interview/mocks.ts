import type { TopicId } from "@/domain/training";

import type { InterviewPreset } from "./types";

export const interviewPresets: InterviewPreset[] = [
  {
    mode: "quick",
    title: "Quick drill",
    description: "Short session for warm-up and confidence checks before a longer mock round.",
    questionCount: 3,
    estimatedMinutes: 12,
  },
  {
    mode: "deep",
    title: "Deep review",
    description: "Longer sequence with architectural prompts and tradeoff-heavy follow-up questions.",
    questionCount: 5,
    estimatedMinutes: 24,
  },
];

export const interviewPromptBank: Record<TopicId, string[]> = {
  "javascript-runtime": [
    "Explain the execution order of synchronous code, microtasks, and macrotasks in a browser tab.",
    "Why can a long microtask chain still hurt responsiveness even when rendering is deferred?",
    "Compare `queueMicrotask`, `setTimeout`, and `requestAnimationFrame` for UI work scheduling.",
    "What tradeoffs appear when you debounce user input with timers instead of cancellation?",
    "How would you explain event loop behavior during a React state update triggered inside a promise?",
  ],
  "networking-browser-apis": [
    "How would you structure a typed fetch layer for browser APIs without leaking transport details into UI code?",
    "Explain when `AbortController` should live inside a component versus a shared service.",
    "What caching strategy would you choose for topic metadata that changes rarely but must stay trustworthy?",
    "Compare `localStorage`, `sessionStorage`, and IndexedDB for interview progress drafts.",
    "How do browser preflight requests affect perceived latency for a frontend talking to a JSON API?",
  ],
  "rendering-reconciliation": [
    "Walk through what happens from server-rendered HTML to a hydrated React tree in the browser.",
    "Why do unstable keys create reconciliation bugs that are hard to notice in small demos?",
    "How would you place client component boundaries in a Next.js App Router screen with forms and dashboards?",
    "What problems appear when derived UI state is recomputed in effects instead of during render?",
    "Explain when React Server Components reduce bundle size and when they mostly move cost to the server.",
  ],
};
