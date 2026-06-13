import { NextResponse } from "next/server";

import { getInterviewSessionById } from "@/domain/interview";

type InterviewSessionRouteContext = {
  params: Promise<{
    sessionId: string;
  }>;
};

export const GET = async (_request: Request, { params }: InterviewSessionRouteContext) => {
  const { sessionId } = await params;

  if (sessionId.trim().length === 0) {
    return NextResponse.json(
      {
        error: {
          code: "invalid_session_id",
          message: "Session id is required.",
        },
      },
      { status: 400 },
    );
  }

  const session = await getInterviewSessionById(sessionId);

  if (!session) {
    return NextResponse.json(
      {
        error: {
          code: "session_not_found",
          message: "Interview session was not found.",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: session,
  });
};
