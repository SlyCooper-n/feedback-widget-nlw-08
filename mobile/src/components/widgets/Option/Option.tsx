import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./Option.style";

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export const Option = ({ title, image, ...rest }: OptionProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
