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
}

export const FeedbackContextProvider = ({ children }: FeedbackContextProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>("BUG");

  function selectFeedbackType(type: FeedbackType) {
    setFeedbackType(type);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackType,
        selectFeedbackType,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
