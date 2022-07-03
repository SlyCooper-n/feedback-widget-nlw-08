import { Text, View } from "react-native";
import {
  FeedbackContextProvider,
  useFeedback,
} from "../../../utils/feedbackContext";
import { Copyright } from "../../widgets/Copyright";
import { FeedbackStep } from "./components/feedbackStep";
import { styles } from "./Steps.style";

export const Steps = () => {
  const { feedbackType } = useFeedback();

  return (
    <FeedbackContextProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Leave your feedback</Text>

        {!feedbackType ? <FeedbackStep /> : <Text>{feedbackType}</Text>}

        <Copyright />
      </View>
    </FeedbackContextProvider>
  );
};
