import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 3,
    overflow: "hidden", // This ensures the border radius is applied properly
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: "#F4F6F6",
    margin: "5%",
  },
  saveButton: {
    padding: 13,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    width: "100%",
    borderRadius: 3,
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
    borderRadius: 3,
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
    borderRadius: 3,
    backgroundColor: "#186F65",
  },
  selectCalculationType: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 8,
  },
  buttonInactive: {
    backgroundColor: "lightgray",
  },
  buttonActive: {
    color: "#fff", // Set text color to white for active button
    backgroundColor: "#00224D",
  },

  buttonText: {
    textAlign : "center",
    color: "#fff",
    fontSize: 16, // Optional: Customize font size
    fontWeight: "bold", // Optional: Customize font weight
  },
});

export default styles;
