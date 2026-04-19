import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardItem: {
    width: "100%",
    height: "100%",
    maxWidth: 178,
    maxHeight: 209,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.light,
    borderRadius: 20,
    elevation: 5,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  description: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "600",
    color: colors.secondary,
  },
  subtitle: {
    color: colors.textGray,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
