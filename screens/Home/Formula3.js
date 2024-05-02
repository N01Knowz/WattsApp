import React, { useState } from "react";
import { Alert, TouchableOpacity, Text, View, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from "./Formula1.css";
import CustomCard2 from "./Components/CustomCard2";
import CustomModal from "../Components/CustomModal";
import Input from "./Components/Input";

const db = SQLite.openDatabase("WattsApp");

const Formula3 = () => {
  const [W, setW] = React.useState();
  const [hrs, sethrs] = React.useState();
  const [Days, setDays] = React.useState();
  const [Saved, setSaved] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const saveResult = async () => {
    const WValue = parseFloat(W);
    const hrsValue = parseFloat(hrs);
    const DaysValue = parseInt(Days);
    const SavedValue = parseFloat(Saved);

    if (
      isNaN(WValue) ||
      isNaN(hrsValue) ||
      isNaN(DaysValue) ||
      isNaN(SavedValue)
    ) {
      alert("Invalid input. Please enter valid numeric values to all inputs.");
      return;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          `INSERT INTO formula3 (W, hrs, Days, Saved) VALUES (?, ?, ?, ?)`,
          [WValue, hrsValue, DaysValue, SavedValue],
          (_, result) => {
            setW("");
            sethrs("");
            setDays("");
            setSaved("");
            setModalVisible(false);
          },
          (_, error) => {
            console.error("Error inserting values into formula3:", error);
          }
        );
      },
      (error) => {
        console.error("Transaction error:", error);
      }
    );
  };

  const solveFormula = () => {
    if (
      (!W && !hrs && !Days) ||
      (!Saved && !hrs && !Days) ||
      (!Saved && !W && !Days) ||
      (!Saved && !hrs && !W)
    ) {
      Alert.alert("Solve Error", "Provide at least Three variables.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else if (W && hrs && Days && Saved) {
      Alert.alert("Solve Error", "Leave at least 1 variable empty.", [
        {
          text: "Close",
          onPress: () => console.log("Close button pressed"),
        },
      ]);
    } else {
      if (W && hrs && Days) {
        setSaved(
          ((parseFloat(W) / 1000) * parseFloat(hrs) * parseFloat(Days) * 8.81)
            .toFixed(2)
            .toString()
        );
      }

      if (Saved && hrs && Days) {
        setW(
          (
            (parseFloat(Saved) / (parseFloat(hrs) * parseFloat(Days) * 8.81)) *
            1000
          )
            .toFixed(2)
            .toString()
        );
      }

      if (Saved && W && Days) {
        sethrs(
          (
            parseFloat(Saved) /
            ((parseFloat(W) / 1000) * parseFloat(Days) * 8.81)
          )
            .toFixed(2)
            .toString()
        );
      }

      if (Saved && hrs && W) {
        setDays(
          (
            parseFloat(Saved) /
            ((parseFloat(W) / 1000) * parseFloat(hrs) * 8.81)
          )
            .toFixed(2)
            .toString()
        );
      }
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.cardContainer}>
        <CustomCard2
          title={"1st Formula"}
          t1={"₱Saved ="}
          ftext={"(ʷ⁄₁₀₀₀) ˣ ⁿᵘᵐ ᵒᶠ ʰᵒᵘʳˢ ⁿᵉᵉᵈᵉᵈ"}
          f2text={"ⁿᵘᵐ ᵈᵃʸˢ ᵘˢᵉᵈ ˣ ₱8.81"}
        />
      </View>

      <View style={styles.inputInputContainer}>
        <Input
          label={"Watt (W):"}
          placeholder={"W"}
          value={W}
          setvalue={setW}
        />
        <Input
          label={"Hourse (Hrs):"}
          placeholder={"Hrs"}
          value={hrs}
          setvalue={sethrs}
        />
        <Input
          label={"Days used :"}
          placeholder={"Day used"}
          value={Days}
          setvalue={setDays}
        />
        <Input
          label={"₱ Saved :"}
          placeholder={"₱ Saved"}
          value={Saved}
          setvalue={setSaved}
        />
        <TouchableOpacity onPress={solveFormula} style={styles.button}>
          <Text style={styles.buttonText}>Solve Formula</Text>
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
        <Text style={styles.modalContentText}>W: {W}</Text>
        <Text style={styles.modalContentText}>Hrs : {hrs}</Text>
        <Text style={styles.modalContentText}>Days: {Days}</Text>
        <Text style={styles.modalContentText}>Saved: {Saved}</Text>
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

export default Formula3;
