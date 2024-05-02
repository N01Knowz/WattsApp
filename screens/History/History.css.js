import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between",
  },
  main: {
    backgroundColor: "#F4F6F6",
  },
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  //modals
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
    width: 175,
    borderRadius: 7,
    backgroundColor: "#FF204E",
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
    width: 175,
    borderRadius: 7,
    backgroundColor: "#5D0E41",
  },
});

export default styles;
