import React from "react";
import styles from "./css/Card3.css.js";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

const CustomCard2 = ({ title, t1, ftext, f2text, f3text, f4text, f5text }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.formulaContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{t1}</Text>
          {ftext}
          <Text style={styles.fractionText}>{f2text}</Text>
        </View>
      </View>

      <View style={styles.formulaContainer}>
        <Text style={styles.fractionText}>{f3text}</Text>
        <Text style={styles.fractionText}>{f4text}</Text>
        <Text style={styles.fractionText}>{f5text}</Text>
      </View>
    </Card>
  );
};

export default CustomCard2;
