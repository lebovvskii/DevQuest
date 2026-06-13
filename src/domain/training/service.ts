import { dashboardSummary, topicDetails } from "./mocks";
import type { DashboardSummary, TopicDetails, TopicId } from "./types";

export const getDashboardSummary = (): DashboardSummary => {
  return dashboardSummary;
};

export const getTopics = (): TopicDetails[] => {
  return topicDetails;
};

export const getTopicById = (topicId: string): TopicDetails | null => {
  return topicDetails.find((topic) => topic.id === topicId) ?? null;
};

export const isTopicId = (topicId: string): topicId is TopicId => {
  return topicDetails.some((topic) => topic.id === topicId);
};
