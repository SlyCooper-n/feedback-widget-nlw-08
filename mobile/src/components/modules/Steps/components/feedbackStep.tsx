import { View } from "react-native";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { Option } from "../../../widgets/Option";
import { styles } from "../Steps.style";

export const FeedbackStep = () => {
  return (
    <View style={styles.options}>
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return <Option key={key} title={value.title} image={value.image} />;
      })}
    </View>
  );
};
