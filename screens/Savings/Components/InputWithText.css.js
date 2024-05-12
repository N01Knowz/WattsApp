import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "flex-end" },
  editable: {
    borderBottomColor: "black",
    borderBottomWidth: 1, // or any other value you desire
  },
  notEditable: {
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
  inputs: {
    minWidth: 40,
    paddingHorizontal: 5,
  },
});

export default styles;
