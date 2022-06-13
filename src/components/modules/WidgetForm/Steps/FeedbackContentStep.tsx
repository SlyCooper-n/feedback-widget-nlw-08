import { ArrowLeft } from "phosphor-react";
import { FeedbackType } from "..";
import { CloseBtn } from "../../../widgets/CloseBtn";

type FeedbackContentStepProps = {
  feedbackType: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
  setFeedbackType: (type: FeedbackType | null) => void;
};

export const FeedbackContentStep = ({
  feedbackType,
  setFeedbackType,
}: FeedbackContentStepProps) => {
  return (
    <>
      <header>
        <button
          type="button"
          onClick={() => setFeedbackType(null)}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft className="w-4 aspect-square" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackType.image.src}
            alt={feedbackType.image.alt}
            className="w-6 aspect-square"
          />
          {feedbackType.title}
        </span>

        <CloseBtn />
      </header>

      <form className="w-full my-8">
        <textarea
          placeholder="Tell with details what's happening..."
          className="w-full md:min-w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent border-zinc-600 focus:ring-1 focus:ring-brand-500 focus:border-transparent outline-none rounded-md resize-none scrollbar-thumb-zinc-700 scrollbar-transparent scrollbar-thin"
        />
      </form>
    </>
  );
};
