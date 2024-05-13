import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: "400",
    fontSize: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
});

export default styles;
