import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  emptyText: {
    textAlign: "center",
    color: colors.textGray,
    marginTop: 24,
    fontSize: 16,
  },
});
