import { integer, jsonb, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import type { InterviewPrompt } from "@/domain/interview";

export const interviewModeEnum = pgEnum("interview_mode", ["quick", "deep"]);
export const interviewStatusEnum = pgEnum("interview_status", ["ready"]);

export const interviewSessionsTable = pgTable("interview_sessions", {
  id: uuid("id").primaryKey(),
  topicId: text("topic_id").notNull(),
  topicName: text("topic_name").notNull(),
  topicDescription: text("topic_description").notNull(),
  mode: interviewModeEnum("mode").notNull(),
  modeTitle: text("mode_title").notNull(),
  status: interviewStatusEnum("status").notNull(),
  questionCount: integer("question_count").notNull(),
  estimatedMinutes: integer("estimated_minutes").notNull(),
  focusAreas: jsonb("focus_areas").$type<string[]>().notNull(),
  prompts: jsonb("prompts").$type<InterviewPrompt[]>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
});
