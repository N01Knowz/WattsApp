import React, { useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from "./Formula1.css";
import CustomCard from "./Components/CustomCard";
import CustomModal from "../Components/CustomModal";
import Input from "./Components/Input";
import DividedText from "../Components/DividedText";

const db = SQLite.openDatabase("WattsApp");

const Formula2 = () => {
  const [Hp, setHp] = React.useState();
  const [RPM, setRPM] = React.useState();
  const [T, setT] = React.useState();
  const [PxW, setPxW] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const saveResult = async () => {
    const HpValue = parseFloat(Hp);
    const RPMValue = parseFloat(RPM);
    const TValue = parseFloat(T);
    const PxWValue = parseFloat(PxW);

    if (isNaN(HpValue) || isNaN(RPMValue) || isNaN(TValue) || isNaN(PxWValue)) {
      alert("Invalid input. Please enter valid numeric values to all inputs.");
      return;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          `INSERT INTO formula2 (Hp, RPM, T, PxW) VALUES (?, ?, ?, ?)`,
          [HpValue, RPMValue, TValue, PxWValue],
          (_, result) => {
            setHp("");
            setRPM("");
            setT("");
            setPxW("");
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
    if ((!Hp && !RPM) || (!Hp && !T) || (!RPM && !T)) {
      Alert.alert("Solve Error", "Provide at least two variables.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else if (Hp && RPM && T) {
      Alert.alert("Solve Error", "Leave at least 1 variable empty.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else {
      if (Hp && RPM) {
        setT(((parseFloat(Hp) * 5252) / parseFloat(RPM)).toFixed(2).toString());
      }

      if (T && RPM) {
        setHp(((parseFloat(T) * parseFloat(RPM)) / 5252).toFixed(2).toString());
      }

      if (T && Hp) {
        setV(((parseFloat(Hp) * 5252) / parseFloat(T)).toFixed(2).toString());
      }
    }
  };

  const solveFormula2 = () => {
    if ((!T && !RPM) || (!T && !PxW) || (!RPM && !PxW)) {
      Alert.alert("Solve Error", "Provide at least two variables.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else if (T && RPM && PxW) {
      Alert.alert("Solve Error", "Leave at least 1 variable empty.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else {
      if (T && RPM) {
        setPxW(
          ((parseFloat(T) * parseFloat(RPM) * 2 * Math.PI) / 60)
            .toFixed(2)
            .toString()
        );
      }

      if (PxW && T) {
        setRPM(
          ((parseFloat(PxW) * 60) / (parseFloat(T) * 2 * Math.PI))
            .toFixed(2)
            .toString()
        );
      }

      if (PxW && RPM) {
        setT(
          (parseFloat(PxW) * 60) /
            (parseFloat(RPM) * 2 * Math.PI).toFixed(2).toString()
        );
      }
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.cardContainer}>
        <CustomCard
          title={"1st Formula"}
          t1={"T ="}
          ftext={<DividedText upperText={"Hp x 5252"} lowerText={"RPM"} />}
        />
      </View>
      <View style={styles.inputInputContainer}>
        <Input
          label={"Horsepower (Hp):"}
          placeholder={"Hp"}
          value={Hp}
          setvalue={setHp}
        />
        <Input
          label={"Revolutions Per Minute (RPM):"}
          placeholder={"RPM"}
          value={RPM}
          setvalue={setRPM}
        />
        <Input
          label={"Time (t):"}
          placeholder={"T"}
          value={T}
          setvalue={setT}
        />
        <TouchableOpacity onPress={solveFormula1} style={styles.button}>
          <Text style={styles.buttonText}>Solve 1st Formula</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <CustomCard
          title={"2nd Formula"}
          t1={"T ="}
          ftext={<DividedText upperText={"T x RPM x 2π"} lowerText={"60"} />}
        />
      </View>
      <View style={styles.inputInputContainer}>
        <Input
          label={"Time (T):"}
          placeholder={"T"}
          value={T}
          setvalue={setT}
        />
        <Input
          label={"Revolutions Per Minute (RPM):"}
          placeholder={"RPM"}
          value={RPM}
          setvalue={setRPM}
        />
        <Input
          label={"PxW (PxW):"}
          placeholder={"PxW"}
          value={PxW}
          setvalue={setPxW}
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
        <Text style={styles.modalContentText}>Hp: {Hp}</Text>
        <Text style={styles.modalContentText}>RPM : {RPM}</Text>
        <Text style={styles.modalContentText}>T: {T}</Text>
        <Text style={styles.modalContentText}>PxW: {PxW}</Text>
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

export default Formula2;
