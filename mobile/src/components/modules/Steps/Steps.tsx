import { Text, View } from "react-native";
import { feedbackTypes } from "../../../utils/feedbackTypes";
import { Copyright } from "../../widgets/Copyright";
import { Option } from "../../widgets/Option";
import { styles } from "./Steps.style";

export const Steps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave your feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return <Option key={key} title={value.title} image={value.image} />;
        })}
      </View>

      <Copyright />
    </View>
  );
};
