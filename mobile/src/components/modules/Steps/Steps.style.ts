import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    marginBottom: 32,

    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },

  options: {
    width: "100%",
    marginBottom: 48,

    flexDirection: "row",
    justifyContent: "center",
  },
});
