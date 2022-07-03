import { ReactNode } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./Button.style";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = ({ isLoading, children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {isLoading ? <ActivityIndicator /> : children}
    </TouchableOpacity>
  );
};
