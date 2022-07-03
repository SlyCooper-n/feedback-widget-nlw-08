import { Text, View } from "react-native";
import { useFeedback } from "../../../utils/feedbackContext";
import { Copyright } from "../../widgets/Copyright";
import { FeedbackStep } from "./components/FeedbackStep";
import { FormStep } from "./components/FormStep";
import { styles } from "./Steps.style";

export const Steps = () => {
  const { feedbackType } = useFeedback();

  return (
    <View style={styles.container}>
      {!feedbackType && <Text style={styles.title}>Leave your Feedback</Text>}

      {!feedbackType ? <FeedbackStep /> : <FormStep />}

      <Copyright />
    </View>
  );
};
