import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between",
  },
  button: {
    padding: 16,
    marginTop: 10,
    marginBottom: 0,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 5 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 2, // For iOS
    elevation: 2, // For Android
  },

  buttonText: {
    color: "black",
    fontSize: 16.5,
    textAlign: "left",
    fontWeight: "500",
  },
});

export default styles;
