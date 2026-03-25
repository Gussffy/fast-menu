import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  filterContainer: {
    paddingLeft: 20,
    marginVertical: 27,
  },
  filter: {
    paddingHorizontal: 28,
    paddingVertical: 15,
    backgroundColor: colors.background,
    borderRadius: 20,
    marginRight: 14,
  },
  filterText: {
    color: colors.textGray,
    fontWeight: "600",
  },
});

export default style;
