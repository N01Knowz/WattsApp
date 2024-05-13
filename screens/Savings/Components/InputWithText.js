import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./InputWithText.css";

const InputWithText = ({ value, setValue, unit, label, editable = true }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={[styles.inputs, editable ? styles.editable : styles.notEditable]}
        onChangeText={setValue}
        value={value}
        keyboardType="numeric"
        editable={editable}
        placeholder={unit}
      />
    </View>
  );
};

export default InputWithText;
