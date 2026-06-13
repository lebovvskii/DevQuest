import { getTopicById, getTopics, isTopicId } from "@/domain/training";

import { interviewPresets, interviewPromptBank } from "./mocks";
import { memoryInterviewSessionRepository } from "./repository";
import type {
  InterviewMode,
  InterviewQuestionCount,
  InterviewSession,
  InterviewStartInput,
  InterviewStartOptions,
} from "./types";
import { parseInterviewStartInput } from "./validation";

const buildPrompts = (topicId: keyof typeof interviewPromptBank, questionCount: InterviewQuestionCount) => {
  const topic = getTopicById(topicId);

  if (!topic) {
    return [];
  }

  return interviewPromptBank[topicId].slice(0, questionCount).map((question, index) => ({
    id: `${topicId}-${index + 1}`,
    focusArea: topic.focusAreas[index % topic.focusAreas.length] ?? topic.focusAreas[0],
    question,
  }));
};

export const getInterviewStartOptions = (): InterviewStartOptions => {
  const topics = getTopics();

  return {
    defaultTopicId: topics[0]?.id ?? "javascript-runtime",
    presets: interviewPresets,
    topics,
  };
};

export const isInterviewMode = (value: string): value is InterviewMode => {
  return interviewPresets.some((preset) => preset.mode === value);
};

export const createInterviewSession = async (input: InterviewStartInput): Promise<InterviewSession | null> => {
  const parsedInput = parseInterviewStartInput(input);

  if (!parsedInput || !isTopicId(parsedInput.topicId) || !isInterviewMode(parsedInput.mode)) {
    return null;
  }

  const topic = getTopicById(parsedInput.topicId);
  const preset = interviewPresets.find((item) => item.mode === parsedInput.mode);

  if (!topic || !preset) {
    return null;
  }

  const session: InterviewSession = {
    id: crypto.randomUUID(),
    topicId: topic.id,
    topicName: topic.name,
    topicDescription: topic.description,
    mode: preset.mode,
    modeTitle: preset.title,
    status: "ready",
    questionCount: preset.questionCount,
    estimatedMinutes: preset.estimatedMinutes,
    createdAt: new Date().toISOString(),
    prompts: buildPrompts(topic.id, preset.questionCount),
    focusAreas: topic.focusAreas,
  };

  await memoryInterviewSessionRepository.createSession(session);

  return session;
};

export const getInterviewSessionById = async (sessionId: string): Promise<InterviewSession | null> => {
  return memoryInterviewSessionRepository.getSessionById(sessionId);
};
