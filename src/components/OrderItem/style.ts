import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 10,
    maxHeight: 180,
  },
  imageContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
  },
  description: {
    color: colors.secondary,
  },
  descriptionContainer: {
    flex: 1,
  },
  cartImage: {
    objectFit: "contain",
    width: 100,
    maxHeight: 100,
  },
  price: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: "600",
  },
});

export default styles;
