import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  summaryCard: {
    marginTop: 4,
    marginBottom: 12,
    borderRadius: 18,
    backgroundColor: colors.light,
    borderWidth: 1,
    borderColor: "#ececec",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    color: colors.textGray,
    fontSize: 14,
    fontWeight: "600",
  },
  summaryValue: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "700",
  },
  listContent: {
    gap: 16,
    paddingBottom: 18,
  },
  emptyMessage: {
    textAlign: "center",
    color: colors.textGray,
    marginTop: 24,
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    gap: 14,
  },
  checkoutButton: {
    width: 194,
    height: 70,
    borderRadius: 20,
  },
  checkoutButtonText: {
    fontSize: 34 / 2,
    fontWeight: "700",
  },
});

export default styles;


