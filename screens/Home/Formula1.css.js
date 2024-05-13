import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputInputContainer: {
    marginBottom: 10,
    justifyContent: "center",
    alignment: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    padding: 10,
    backgroundColor: "#F4F6F6",
  },
  input: {
    height: 45,
    flex: 1,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#1C2938",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#EEEEEE",
  },
  //for css containers
  container: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-around", // Space evenly between the two groups
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    height: 170,
    padding: 15,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#F4F6F6",
  },
  group: {
    flex: 1, // Each group takes up equal space
    padding: 15,
    backgroundColor: "#f0f0f0",
  },
  formulaContainer: {
    paddingTop: 13,
    flexDirection: "row",
    alignItems: "center", // Align items vertically within the container
    paddingHorizontal: 50,
  },
  text: {
    fontWeight: "400",
    fontSize: 25,
  },
  fractionText: {
    fontSize: 30,
    fontWeight: "300",
    // Add any additional styling for the fraction text here
  },
  headerContainer: {
    backgroundColor: "#7E2553",
    borderRadius: 3,
    padding: 10,
    paddingHorizontal: 118, // Adjust as needed
  },
  headerText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFF", // Optional: to ensure text is visible against the background
  },

  //buttons
  containerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 13,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 2,
    width: "100%",
    borderRadius: 3,
    backgroundColor: "#1C2938",
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
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
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
});

export default styles;
