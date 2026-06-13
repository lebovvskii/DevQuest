import { NextResponse } from "next/server";

import { createInterviewSession, parseInterviewStartInput } from "@/domain/interview";

export const POST = async (request: Request) => {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const payload = parseInterviewStartInput(body);

  if (!payload) {
    return NextResponse.json(
      {
        error: {
          code: "invalid_payload",
          message: "Topic id or mode is invalid.",
        },
      },
      { status: 400 },
    );
  }

  const session = await createInterviewSession(payload);

  if (!session) {
    return NextResponse.json(
      {
        error: {
          code: "session_not_created",
          message: "Interview session could not be created.",
        },
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      data: session,
    },
    { status: 201 },
  );
};
