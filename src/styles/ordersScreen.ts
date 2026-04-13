import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 18,
  },
});

export default styles;

