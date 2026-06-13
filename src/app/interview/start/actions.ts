"use server";

import { redirect } from "next/navigation";

import { createInterviewSession, parseInterviewStartFormData } from "@/domain/interview";

export const startInterviewAction = async (formData: FormData) => {
  const payload = parseInterviewStartFormData(formData);

  if (!payload) {
    throw new Error("Topic and mode are required to start an interview session.");
  }

  const session = await createInterviewSession(payload);

  if (!session) {
    throw new Error("Interview session could not be created.");
  }

  redirect(`/interview/sessions/${session.id}`);
};
