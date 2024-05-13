import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "flex" },
  editable: {
    borderBottomColor: "black",
    borderBottomWidth: 1, // or any other value you desire
  },
  notEditable: {
    height: 45,
    flex: 1,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#1C2938",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  inputs: {
    height: 45,
    flex: 1,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#1C2938",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#EEEEEE",
  },
});

export default styles;
