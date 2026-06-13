import { getDashboardSummary } from "@/domain/training";

const dashboardSummary = getDashboardSummary();

export const { interviewQueue, overviewStats, progressHighlights, roadmapTopics } = dashboardSummary;
