import { Image, ImageProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./Option.style";

interface OptionProps {
  title: string;
  image: ImageProps;
}

export const Option = ({ title, image }: OptionProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
