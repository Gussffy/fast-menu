import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    width: "100%",
  },
  labelContainer: {
    position: "absolute",
    left: 15,
    top: -10,
    backgroundColor: colors.light,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  label: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: "500",
  },
  input: {
    height: 55,
    borderColor: colors.inputBorder || "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: colors.light,
    color: colors.dark,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
