import React, { useState } from "react";
import { Alert, TouchableOpacity, Text, View, ScrollView } from "react-native";
import styles from "./Formula1.css";
import Input from "./Components/Input";
import CustomCard from "./Components/CustomCard";
import CustomModal from "../Components/CustomModal";
import DividedText from "../Components/DividedText";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WattsApp");

const Formula1 = () => {
  const [maH, setmaH] = React.useState("");
  const [V, setV] = React.useState("");
  const [Wh, setWh] = React.useState("");
  const [W, setW] = React.useState("");
  const [hr, sethr] = React.useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const saveResult = async () => {
    const maHValue = parseFloat(maH);
    const VValue = parseFloat(V);
    const WhValue = parseFloat(Wh);
    const WValue = parseFloat(W);
    const hrValue = parseFloat(hr);

    if (
      isNaN(maHValue) ||
      isNaN(VValue) ||
      isNaN(WhValue) ||
      isNaN(WValue) ||
      isNaN(hrValue)
    ) {
      alert("Invalid input. Please enter valid numeric values to all inputs.");
      return;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          `INSERT INTO formula1 (maH, V, Wh, W, hr) VALUES (?, ?, ?, ?, ?)`,
          [maHValue, VValue, WhValue, WValue, hrValue],
          (_, result) => {
            setmaH("");
            setV("");
            setWh("");
            setW("");
            sethr("");
            setModalVisible(false);
          },
          (_, error) => {
            console.error("Error inserting values:", error);
          }
        );
      },
      (error) => {
        console.error("Transaction error:", error);
      }
    );
  };

  const solveFormula1 = () => {
    if ((!maH && !V) || (!maH && !Wh) || (!V && !Wh)) {
      Alert.alert("Solve Error", "Provide at least two variables.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else if (maH && V && Wh) {
      Alert.alert("Solve Error", "Leave at least 1 variable empty.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else {
      if (maH && V) {
        setWh(((parseFloat(maH) * parseFloat(V)) / 1000).toFixed(2).toString());
      }

      if (Wh && V) {
        setmaH(((parseFloat(Wh) * 1000) / V).toFixed(2).toString());
      }

      if (maH && Wh) {
        setV(((parseFloat(Wh) * 1000) / parseFloat(maH)).toFixed(2).toString());
      }
    }
  };

  const solveFormula2 = () => {
    if ((!W && !hr) || (!W && !Wh) || (!hr && !Wh)) {
      Alert.alert("Solve Error", "Provide at least two variables.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else if (W && hr && Wh) {
      Alert.alert("Solve Error", "Leave at least 1 variable empty.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else {
      if (W && hr) {
        setWh((parseFloat(W) / parseFloat(hr)).toFixed(2).toString());
      }

      if (Wh && W) {
        sethr((parseFloat(Wh) / parseFloat(W)).toFixed(2).toString());
      }

      if (Wh && hr) {
        setW((parseFloat(Wh) * parseFloat(hr)).toFixed(2).toString());
      }
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.cardContainer}>
        <CustomCard
          title={"1st Formula"}
          t1={"Wh ="}
          ftext={<DividedText upperText={"maH x V"} lowerText={"1000"} />}
        />
      </View>
      <View style={styles.inputInputContainer}>
        <Input
          label={"Milliampere-Hour (maH):"}
          placeholder={"maH"}
          value={maH}
          setvalue={setmaH}
        />
        <Input
          label={"Volts (v):"}
          placeholder={"V"}
          value={V}
          setvalue={setV}
        />
        <Input
          label={"Watt-Hour (Wh):"}
          placeholder={"Wh"}
          value={Wh}
          setvalue={setWh}
        />
        <TouchableOpacity onPress={solveFormula1} style={styles.button}>
          <Text style={styles.buttonText}>Solve 1st Formula</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <CustomCard
          title={"2nd Formula"}
          t1={"Wh ="}
          ftext={<DividedText upperText={"W"} lowerText={"hr"} />}
        />
      </View>
      <View style={styles.inputInputContainer}>
        <Input
          label={"Watt-Hour (Wh):"}
          placeholder={"Wh"}
          value={Wh}
          setvalue={setWh}
        />
        <Input
          label={"Hour (hr):"}
          placeholder={"hr"}
          value={hr}
          setvalue={sethr}
        />
        <Input
          label={"Watt (W):"}
          placeholder={"W"}
          value={W}
          setvalue={setW}
        />
        <TouchableOpacity onPress={solveFormula2} style={styles.button}>
          <Text style={styles.buttonText}>Solve 2nd Formula</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Text style={styles.modalHeaderText}>Store these values?</Text>
        <Text style={styles.modalContentText}>maH: {maH}</Text>
        <Text style={styles.modalContentText}>V: {V}</Text>
        <Text style={styles.modalContentText}>Wh: {Wh}</Text>
        <Text style={styles.modalContentText}>W: {W}</Text>
        <Text style={styles.modalContentText}>hr: {hr}</Text>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalTextButton}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalSaveButton} onPress={saveResult}>
            <Text style={styles.modalTextButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </ScrollView>
  );
};

export default Formula1;
