import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  descContainer: {
    marginTop: 6,
    marginBottom: 18,
    gap: 14,
  },
  quantity: {
    fontSize: 38 / 2,
    fontWeight: "700",
    color: colors.dark,
  },
  total: {
    fontSize: 39 / 2,
    fontWeight: "700",
    color: colors.dark,
  },
});

export default styles;
