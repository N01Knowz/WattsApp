import React from "react";
import styles from "./css/Card.css";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

const CustomCard = ({ title, t1, ftext }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.formulaContainer}>
        <Text style={styles.text}>{t1}</Text>
        {ftext}
      </View>
    </Card>
  );
};

export default CustomCard;
