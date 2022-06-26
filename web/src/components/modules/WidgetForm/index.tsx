import bugImg from "../../../images/bug.svg";
import ideaImg from "../../../images/idea.svg";
import thoughtImg from "../../../images/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackBtns = {
  BUG: {
    title: "Bug",
    image: {
      src: bugImg,
      alt: "Tiny bug icon",
    },
    placeholder: "Describe the bug and tell with details what's happening...",
  },
  IDEA: {
    title: "Idea",
    image: {
      src: ideaImg,
      alt: "Idea lamp icon",
    },
    placeholder: "Tell us what you're thinking about...",
  },
  OTHER: {
    title: "Other",
    image: {
      src: thoughtImg,
      alt: "Thought balloon icon",
    },
    placeholder: "What's on your mind?",
  },
};

export type FeedbackType = keyof typeof feedbackBtns;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function returnBack() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="relative w-[calc(100vw-2rem)] md:w-auto mb-4 p-4 flex flex-col items-center bg-zinc-900 rounded-2xl shadow-lg">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : !feedbackSent ? (
        <FeedbackContentStep
          feedbackType={feedbackBtns[feedbackType]}
          returnBack={returnBack}
          sendFeedback={() => setFeedbackSent(true)}
        />
      ) : (
        <FeedbackSuccessStep restartFeedback={() => returnBack()} />
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
