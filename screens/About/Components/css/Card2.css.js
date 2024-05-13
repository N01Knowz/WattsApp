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
  headerContainer: {
    backgroundColor: "#7E2553",
    borderRadius: 3,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFF", // Optional: to ensure text is visible against the background
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
  formulaContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", // Allow content to wrap to the next line if needed
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5, // Add some spacing between text elements
  },
  fractionText: {
    marginLeft: 5, // Add some spacing between text elements
    fontSize: 15,
  },
});

export default styles;
