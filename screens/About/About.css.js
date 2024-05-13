import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F4F6F6",
    padding: "5%",
    marginTop: "2%",
  },
  innerContainer: {
    backgroundColor: "#F4F6F6",
    margin: "5%",
  },
  boldHeader: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
  boldh2: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  boldh3: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
    marginTop: 2,
  },

  text1: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
  },
  text2: {
    paddingHorizontal: "16%",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
  },
  viewLine: {
    borderBottomColor: "black",

    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  imageContainer: {
    padding: 2,
    marginTop: 5,
    marginBottom: 20,
    width: "100%",
    height: 190,
    borderRadius: 2,
    backgroundColor: "#fff",
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 5 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 2, // For iOS
    elevation: 2, // For Android
  },
  column: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  stationImage: {
    width: "100%",
    marginTop: 5,
    height: "95%",
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  stationImageContainer: {
    padding: 2,
    marginTop: 5,
    margin: "8%",
    marginBottom: 20,
    width: "80%",
    alignContent: "center",
    height: 190,
    borderRadius: 2,
    backgroundColor: "#fff",
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 5 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 2, // For iOS
    elevation: 2, // For Android
  },
  flatListContainer: {
    container: {
      width: "100%",
      flex: 1,
    },
  },

  item: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "fff",
    borderWidth: 1,
    borderRadius: 3,
    margin: 2,
  },
  flatListContent: {
    alignItems: "center", // Center the items horizontally
  },
});

export default styles;
