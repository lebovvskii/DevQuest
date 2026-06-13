import { InterviewStartPage } from "@/components/pages/InterviewStartPage";
import { getInterviewStartOptions } from "@/domain/interview";

import { startInterviewAction } from "./actions";

type InterviewStartRouteProps = {
  searchParams: Promise<{
    topicId?: string;
  }>;
};

const InterviewStart = async ({ searchParams }: InterviewStartRouteProps) => {
  const { topicId } = await searchParams;
  const { topics, presets, defaultTopicId } = getInterviewStartOptions();

  return (
    <InterviewStartPage
      defaultTopicId={defaultTopicId}
      initialTopicId={topicId}
      presets={presets}
      startInterviewAction={startInterviewAction}
      topics={topics}
    />
  );
};

export default InterviewStart;
