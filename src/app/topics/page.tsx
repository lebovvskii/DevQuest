import { TopicsPage } from "@/components/pages/TopicsPage";
import { getTopics } from "@/domain/training";

const Topics = () => {
  const topics = getTopics();

  return <TopicsPage topics={topics} />;
};

export default Topics;
