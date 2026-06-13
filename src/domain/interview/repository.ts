import type { InterviewSession } from "./types";

export type InterviewSessionRepository = {
  createSession: (session: InterviewSession) => Promise<void>;
  getSessionById: (sessionId: string) => Promise<InterviewSession | null>;
};

const interviewSessionStore = new Map<string, InterviewSession>();

export const memoryInterviewSessionRepository: InterviewSessionRepository = {
  createSession: async (session) => {
    interviewSessionStore.set(session.id, session);
  },
  getSessionById: async (sessionId) => {
    return interviewSessionStore.get(sessionId) ?? null;
  },
};
