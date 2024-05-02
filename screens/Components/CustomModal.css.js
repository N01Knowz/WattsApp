import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black
  },
  modalContent: {
    backgroundColor: "white",
    width: 400,
    padding: 20,
    borderRadius: 10,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "500",
  },
  modalContentText: {
    fontSize: 15,
    marginTop: 10,
  },
});

export default styles;
