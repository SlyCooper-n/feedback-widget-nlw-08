import React, { ReactNode, useContext, useState } from "react";
import { feedbackTypes } from "./feedbackTypes";

const FeedbackContext = React.createContext({} as FeedbackContextValue);

export type FeedbackType = keyof typeof feedbackTypes;

interface FeedbackContextProps {
  children: ReactNode;
}

export interface FeedbackContextValue {
  feedbackType: FeedbackType | null;
  selectFeedbackType: (type: FeedbackType) => void;
  returnBack: () => void;
  screenshot: string | null;
  handleTakeScreeshot: () => void;
  removeScreenshot: () => void;
}

export const FeedbackContextProvider = ({ children }: FeedbackContextProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function selectFeedbackType(type: FeedbackType) {
    setFeedbackType(type);
  }

  function returnBack() {
    setFeedbackType(null);
  }

  function handleTakeScreeshot() {
    setScreenshot("screenshot");
  }

  function removeScreenshot() {
    setScreenshot(null);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackType,
        selectFeedbackType,
        returnBack,
        screenshot,
        handleTakeScreeshot,
        removeScreenshot,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
