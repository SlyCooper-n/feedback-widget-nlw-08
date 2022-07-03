import { View } from "react-native";
import { useFeedback } from "../../../utils/feedbackContext";
import { Copyright } from "../../widgets/Copyright";
import { FeedbackStep } from "./components/FeedbackStep";
import { FormStep } from "./components/FormStep";
import { SuccessStep } from "./components/SuccessStep";
import { styles } from "./Steps.style";

export const Steps = () => {
  const { feedbackType, feedbackSent } = useFeedback();

  return (
    <View style={styles.container}>
      {!feedbackType && <FeedbackStep />}

      {feedbackType && !feedbackSent && <FormStep />}

      {feedbackSent && <SuccessStep />}

      <Copyright />
    </View>
  );
};
