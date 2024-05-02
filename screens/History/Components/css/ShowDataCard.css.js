import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between",
  },
  button: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 5 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 2, // For iOS
    elevation: 2, // For Android
  },

  buttonText: {
    color: "black",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "500",
  },
});

export default styles;
