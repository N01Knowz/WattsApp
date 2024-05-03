import React from "react";
import { Text, View } from "react-native";
import styles from "./css/DividedText.css";

const DividedText = ({ upperText, lowerText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>{upperText}</Text>
      <Text style={styles.lowerText}>{lowerText}</Text>
    </View>
  );
};

export default DividedText;
