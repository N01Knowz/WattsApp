import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./css/ShowDataCard.css";

const ShowDataCard = ({
  label1,
  value1,
  label2 = "",
  value2 = "",
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.rowContainer}>
        <Text style={styles.buttonText}>
          {label1} {value1} {label2 !== "" && "|"} {label2} {value2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowDataCard;
