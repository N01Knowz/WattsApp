import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./css/Input.css";

const Input = ({label, placeholder, value, setvalue}) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setvalue}
          value={value}
          placeholder={placeholder}
          keyboardType="numeric"
        />
      </View>
    </>
  );
};

export default Input;
