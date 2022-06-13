import bugImg from "../../../images/bug.svg";
import ideaImg from "../../../images/idea.svg";
import thoughtImg from "../../../images/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackBtns = {
  BUG: {
    title: "Bug",
    image: {
      src: bugImg,
      alt: "Tiny bug icon",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      src: ideaImg,
      alt: "Idea lamp icon",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      src: thoughtImg,
      alt: "Thought balloon icon",
    },
  },
};

export type FeedbackType = keyof typeof feedbackBtns;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="relative w-[calc(100vw-2rem)] md:w-auto mb-4 p-4 flex flex-col items-center bg-zinc-900 rounded-2xl shadow-lg">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackBtns[feedbackType]}
          setFeedbackType={setFeedbackType}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Made with ❤ by{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
