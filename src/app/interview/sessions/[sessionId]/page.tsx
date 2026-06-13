import { notFound } from "next/navigation";

import { InterviewSessionPage } from "@/components/pages/InterviewSessionPage";
import { getInterviewSessionById } from "@/domain/interview";

type InterviewSessionRouteProps = {
  params: Promise<{
    sessionId: string;
  }>;
};

const InterviewSession = async ({ params }: InterviewSessionRouteProps) => {
  const { sessionId } = await params;
  const session = await getInterviewSessionById(sessionId);

  if (!session) {
    notFound();
  }

  return <InterviewSessionPage session={session} />;
};

export default InterviewSession;
