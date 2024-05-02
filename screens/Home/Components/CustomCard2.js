import React from "react";
import styles from "./css/Card2.css";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

const CustomCard2 = ({ title, t1, ftext, f2text }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.formulaContainer}>
        <Text style={styles.text}>{t1}</Text>
        <Text style={styles.fractionText}>{ftext}</Text>
      </View>
      <Text style={styles.fractionText2}>{f2text}</Text>
    </Card>
  );
};

export default CustomCard2;
