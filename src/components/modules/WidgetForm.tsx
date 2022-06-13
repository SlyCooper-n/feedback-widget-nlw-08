import { CloseBtn } from "../widgets";
import bugImg from "../../images/bug.svg";
import ideaImg from "../../images/idea.svg";
import thoughtImg from "../../images/thought.svg";
import { useState } from "react";

const feedbackBtns = {
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

type FeedbackType = keyof typeof feedbackBtns;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="relative w-[calc(100vw-2rem)] md:w-auto mb-4 p-4 flex flex-col items-center bg-zinc-900 rounded-2xl shadow-lg">
      <header>
        <span className="text-xl leading-6">Give your feedback</span>

        <CloseBtn />
      </header>

      {!feedbackType ? (
        <div className="w-full py-8 flex gap-2">
          {Object.entries(feedbackBtns).map(([key, btn]) => (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="flex-1 w-24 py-5 flex flex-col items-center gap-2 bg-zinc-800 border-2 border-transparent rounded-lg hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={btn.image.src} alt={btn.image.alt} />

              <span className="text-sm">{btn.title}</span>
            </button>
          ))}
        </div>
      ) : (
        <p>OPA</p>
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
