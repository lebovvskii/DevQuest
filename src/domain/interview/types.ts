import type { TopicDetails, TopicId } from "@/domain/training";

export type InterviewMode = "quick" | "deep";

export type InterviewQuestionCount = 3 | 5;

export type InterviewPrompt = {
  id: string;
  focusArea: string;
  question: string;
};

export type InterviewPreset = {
  mode: InterviewMode;
  title: string;
  description: string;
  questionCount: InterviewQuestionCount;
  estimatedMinutes: number;
};

export type InterviewSession = {
  id: string;
  topicId: TopicId;
  topicName: string;
  topicDescription: string;
  mode: InterviewMode;
  modeTitle: string;
  status: "ready";
  questionCount: InterviewQuestionCount;
  estimatedMinutes: number;
  createdAt: string;
  prompts: InterviewPrompt[];
  focusAreas: string[];
};

export type InterviewStartInput = {
  topicId: TopicId;
  mode: InterviewMode;
};

export type InterviewStartOptions = {
  defaultTopicId: TopicId;
  presets: InterviewPreset[];
  topics: TopicDetails[];
};
