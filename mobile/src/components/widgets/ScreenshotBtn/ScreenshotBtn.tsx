import { Camera, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { useFeedback } from "../../../utils/feedbackContext";
import { styles } from "./Screenshot.style";

export const ScreenshotBtn = () => {
  const { screenshot, handleTakeScreeshot, removeScreenshot } = useFeedback();

  return (
    <TouchableOpacity
      onPress={screenshot ? removeScreenshot : handleTakeScreeshot}
      style={styles.container}
    >
      {screenshot ? (
        <Trash
          size={22}
          weight="fill"
          color={theme.colors.text_secondary}
          style={styles.removeIcon}
        />
      ) : (
        <Camera size={24} weight="bold" color={theme.colors.text_primary} />
      )}
    </TouchableOpacity>
  );
};
