import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //for css containers
  card: {
    width: "95%",
    height: 170,
    padding: 15,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#F4F6F6",
  },
  formulaContainer: {
    paddingTop: 13,
    flexDirection: "row",
    alignItems: "center", // Align items vertically within the container
    justifyContent: "center",
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
