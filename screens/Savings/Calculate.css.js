import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  saveButton: {
    padding: 13,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    width: "95%",
    borderRadius: 8,
    backgroundColor: "#186F65",
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  modalContentText: {
    fontSize: 15,
    marginTop: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  modalCloseButton: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 2,
    width: "50%",
    borderRadius: 7,
    backgroundColor: "#7E2553",
  },
  modalTextButton: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  modalSaveButton: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 2,
    width: "50%",
    borderRadius: 7,
    backgroundColor: "#186F65",
  },
  selectCalculationType: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 5, // Add some margin for spacing between buttons
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5, // Optional: Add border radius for rounded corners
    paddingVertical: 8,
  },
  buttonInactive: {
    backgroundColor: "lightgray", // Optional: Add background color for better visibility
  },
  buttonActive: {
    backgroundColor: "lightblue", // Optional: Add background color for better visibility
  },
  buttonText: {
    fontSize: 16, // Optional: Customize font size
    fontWeight: "bold", // Optional: Customize font weight
  },
});

export default styles;
