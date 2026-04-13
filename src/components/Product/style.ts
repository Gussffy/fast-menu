import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  image: {
    width: 355,
    height: 355,
  },
  infoContainer: {
    paddingHorizontal: 20,
    gap: 14,
  },
  title: {
    color: colors.secondary,
    fontSize: 40 / 1.6,
    fontWeight: "700",
    lineHeight: 34,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  score: {
    color: colors.textGray,
    fontSize: 25 / 1.6,
    fontWeight: "600",
  },
  time: {
    color: colors.textGray,
    fontSize: 26 / 1.6,
    fontWeight: "600",
  },
  descriptionContainer: {
    color: colors.textGray,
    fontSize: 34 / 2.8,
    lineHeight: 36 / 1.8,
    paddingRight: 8,
  },
  quantityContainer: {
    marginTop: 14,
    alignItems: "flex-end",
  },
  actionsContainer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  priceContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  price: {
    color: colors.light,
    fontSize: 22 / 1.15,
    fontWeight: "700",
  },
  orderButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    minHeight: 72,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  orderButtonText: {
    color: colors.light,
    fontSize: 34 / 1.8,
    fontWeight: "700",
  },
});

export default styles;