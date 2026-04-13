import { colors } from "@/src/styles/global";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 14,
    minHeight: 205,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  imageContainer: {
    width: "38%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 33 / 2,
    fontWeight: "600",
    color: colors.secondary,
    marginTop: 8,
  },
  description: {
    color: colors.secondary,
    fontSize: 30 / 2,
    marginTop: 2,
  },
  timelineContainer: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 4,
  },
  cartImage: {
    width: 120,
    height: 95,
    resizeMode: "contain",
  },
  statusRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  iconColumn: {
    width: 18,
    alignItems: "center",
  },
  iconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircleActive: {
    backgroundColor: "#ff7a1a",
  },
  iconCircleInactive: {
    backgroundColor: "#c8c8c8",
  },
  connector: {
    width: 2,
    flex: 1,
    marginVertical: 2,
  },
  connectorAccent: {
    backgroundColor: "#ff7a1a",
  },
  connectorMuted: {
    backgroundColor: "#d1d1d1",
  },
  statusLabel: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 31 / 2.2,
    lineHeight: 33 / 1.8,
    fontWeight: "500",
  },
  statusLabelActive: {
    color: "#ff7a1a",
  },
  statusLabelMuted: {
    color: "#a9abc1",
  },
});

export default styles;
