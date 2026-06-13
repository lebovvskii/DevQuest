import { NextResponse } from "next/server";

import { getTopicById, isTopicId } from "@/domain/training";

type TopicRouteContext = {
  params: Promise<{
    topicId: string;
  }>;
};

export const GET = async (_request: Request, { params }: TopicRouteContext) => {
  const { topicId } = await params;

  if (topicId.trim().length === 0) {
    return NextResponse.json(
      {
        error: {
          code: "invalid_topic_id",
          message: "Topic id is required.",
        },
      },
      { status: 400 },
    );
  }

  if (!isTopicId(topicId)) {
    return NextResponse.json(
      {
        error: {
          code: "topic_not_found",
          message: "Topic was not found.",
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    data: getTopicById(topicId),
  });
};
