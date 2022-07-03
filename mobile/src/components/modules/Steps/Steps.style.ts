import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 8,
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

  formHeader: {
    position: "relative",
    marginBottom: 8,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  arrowLeft: {
    marginRight: -8,
  },
  formHeaderTitle: {
    flex: 1,
    paddingRight: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formHeaderImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  formHeaderText: {
    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  formBody: {
    width: "100%",
    paddingHorizontal: 24,
  },
  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,

    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.stroke,
  },
  buttons: {
    flexDirection: "row",
  },
  sendBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtnText: {
    color: theme.colors.text_primary,
  },
});
