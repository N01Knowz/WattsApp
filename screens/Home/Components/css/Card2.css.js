import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //for css containers
  card: {
    width: "100%",
    height: 170,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#F4F6F6",
  },
  formulaContainer: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "left", // Align items vertically within the container
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: "400",
    fontSize: 25,
  },
  fractionText: {
    fontSize: 23,
    fontWeight: "300",
    // Add any additional styling for the fraction text here
  },
  fractionText2: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "300",
    // Add any additional styling for the fraction text here
  },
  headerContainer: {
    backgroundColor: "#7E2553",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 118, // Adjust as needed
  },
  headerText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFF", // Optional: to ensure text is visible against the background
  },
});

export default styles;
