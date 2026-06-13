import { notFound } from "next/navigation";

import { TopicDetailsPage } from "@/components/pages/TopicDetailsPage";
import { getTopicById, getTopics } from "@/domain/training";

type TopicDetailsRouteProps = {
  params: Promise<{
    topicId: string;
  }>;
};

const TopicDetails = async ({ params }: TopicDetailsRouteProps) => {
  const { topicId } = await params;
  const topic = getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  return <TopicDetailsPage topic={topic} />;
};

export const generateStaticParams = () => {
  return getTopics().map((topic) => ({
    topicId: topic.id,
  }));
};

export default TopicDetails;
