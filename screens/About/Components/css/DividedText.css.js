import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    alignSelf: "flex-start", // Align the container to the start of its parent
  },
  upperText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign: "center",
    fontSize: 15,
  },
  lowerText: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default styles;
