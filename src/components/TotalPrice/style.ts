import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 34 / 2.2,
    color: colors.textGray,
    marginBottom: 6,
    fontWeight: "400",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  value: {
    fontSize: 55 / 2,
    fontWeight: "800",
    color: colors.dark,
  },
});
