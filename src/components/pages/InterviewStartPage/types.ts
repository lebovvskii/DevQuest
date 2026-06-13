import type { InterviewPreset } from "@/domain/interview";
import type { TopicDetails, TopicId } from "@/domain/training";

export type InterviewStartPageProps = {
  defaultTopicId: TopicId;
  initialTopicId?: string;
  presets: InterviewPreset[];
  startInterviewAction: (formData: FormData) => void | Promise<void>;
  topics: TopicDetails[];
};
