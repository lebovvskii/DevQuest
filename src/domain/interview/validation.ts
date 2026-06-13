import { z } from "zod";

import { isTopicId } from "@/domain/training";

import { interviewPresets } from "./mocks";
import type { InterviewMode, InterviewStartInput } from "./types";

const interviewModes = interviewPresets.map((preset) => preset.mode) as [InterviewMode, ...InterviewMode[]];

export const interviewStartSchema = z.object({
  topicId: z.string().refine((value) => isTopicId(value), {
    message: "Topic id is invalid.",
  }),
  mode: z.enum(interviewModes),
});

export const parseInterviewStartInput = (input: unknown): InterviewStartInput | null => {
  const result = interviewStartSchema.safeParse(input);

  if (!result.success) {
    return null;
  }

  return result.data;
};

export const parseInterviewStartFormData = (formData: FormData): InterviewStartInput | null => {
  return parseInterviewStartInput({
    mode: formData.get("mode"),
    topicId: formData.get("topicId"),
  });
};
