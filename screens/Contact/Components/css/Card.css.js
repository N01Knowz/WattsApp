import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //for css containers
  card: {
    width: "100%",
    height: 170,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#F4F6F6",
    borderRadius: 5,
  },
  formulaContainer: {
    paddingTop: 15,
    // flexDirection: "row",
    alignItems: "left", // Align items vertically within the container
    justifyContent: "left",
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
  },
  fractionText: {
    fontSize: 30,
    fontWeight: "300",
    // Add any additional styling for the fraction text here
  },
  headerContainer: {
    backgroundColor: "#7E2553",
    borderRadius: 3,
    width: "100%",
    padding: 10,
    paddingHorizontal: 85, // Adjust as needed
  },
  headerText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
    color: "#FFF", // Optional: to ensure text is visible against the background
  },
});

export default styles;
