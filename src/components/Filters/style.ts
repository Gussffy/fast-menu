import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  filterContainer: {
    flexGrow: 0,
    flexShrink: 0,
    height: 50,
    paddingLeft: 20,
    marginTop: 12,
    marginBottom: 10,
  },
  filterContent: {
    alignItems: "center",
    paddingRight: 20,
  },
  filter: {
    paddingHorizontal: 28,
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 20,
    marginRight: 14,
    justifyContent: "center",
  },
  filterSelected: {
    backgroundColor: colors.primary,
  },
  filterText: {
    color: colors.textGray,
    fontWeight: "600",
    fontSize: 14,
  },
  filterTextSelected: {
    color: colors.light,
  },
});

export default style;
