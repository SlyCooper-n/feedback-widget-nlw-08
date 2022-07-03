import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { ReactNode, RefObject, useContext, useState } from "react";
import { captureScreen } from "react-native-view-shot";
import { feedbackTypes } from "./feedbackTypes";

const FeedbackContext = React.createContext({} as FeedbackContextValue);

export type FeedbackType = keyof typeof feedbackTypes;

interface FeedbackContextProps {
  bottomSheetRef: RefObject<BottomSheetMethods>;
  children: ReactNode;
}

export interface FeedbackContextValue {
  feedbackType: FeedbackType | null;
  selectFeedbackType: (type: FeedbackType) => void;
  returnBack: () => void;
  screenshot: string | null;
  handleTakeScreeshot: () => Promise<void>;
  removeScreenshot: () => void;
  feedbackSent: boolean;
  sendFeedback: () => void;
  restartFeedback: () => void;
}

export const FeedbackContextProvider = ({
  bottomSheetRef,
  children,
}: FeedbackContextProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function selectFeedbackType(type: FeedbackType) {
    setFeedbackType(type);
  }

  function returnBack() {
    setFeedbackType(null);
    setScreenshot(null);
  }

  async function handleTakeScreeshot() {
    bottomSheetRef.current?.collapse();

    setTimeout(async () => {
      const img = await captureScreen({
        format: "jpg",
        quality: 0.8,
        // result: "base64",
      });

      bottomSheetRef.current?.expand();

      setScreenshot(img);
    }, 500);
  }

  function removeScreenshot() {
    setScreenshot(null);
  }

  function sendFeedback() {
    setFeedbackSent(true);
  }

  function restartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
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
        feedbackSent,
        sendFeedback,
        restartFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
