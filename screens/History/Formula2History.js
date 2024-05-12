import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./History.css";
import ShowDataCard from "./Components/ShowDataCard";
import CustomModal from "../Components/CustomModal";
import { useFocusEffect } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WattsApp");

const Formula2History = () => {
  const [datas, setDatas] = React.useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [showData, setShowData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  const handleCardPress = (data) => {
    setModalVisible(true);
    setShowData(data);
  };

  const getData = async () => {
    try {
      variable = await fetchData("formula2");
      setDatas(variable);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = (tableName) => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM  ${tableName} ORDER BY id DESC`,
            [],
            (_, { rows }) => {
              const testData = [];
              for (let i = 0; i < rows.length; i++) {
                testData.push(rows.item(i));
              }
              resolve(testData);
            },
            (_, error) => {
              console.error("Error fetching data:", error);
              reject(error);
            }
          );
        },
        (error) => {
          console.error("Transaction error:", error);
          reject(error);
        }
      );
    });
  };

  const deleteData = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM formula2 WHERE id = ?`,
        [id],
        (_, result) => {
          setModalVisible(false);
          getData();
        },
        (_, error) => {
          console.error("Error deleting value:", error);
        }
      );
    });
  };

  return (
    <ScrollView style={styles.main}>
      {datas.map((data, index) => (
        <ShowDataCard
          label1={"Torque:"}
          value1={data.T}
          label2={"Power-Watt:"}
          value2={data.PxW.toFixed(2)}
          onPress={() => handleCardPress(data)}
          key={index}
        />
      ))}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Text style={styles.modalHeaderText}>History</Text>
        <Text style={styles.modalContentText}>Horsepower: {showData.Hp}</Text>
        <Text style={styles.modalContentText}>
          Power in Watts: {showData.PxW}
        </Text>
        <Text style={styles.modalContentText}>RPM: {showData.RPM}</Text>
        <Text style={styles.modalContentText}>Torque: {showData.T}</Text>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalTextButton}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalSaveButton}
            onPress={() => deleteData(showData.id)}
          >
            <Text style={styles.modalTextButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </ScrollView>
  );
};

export default Formula2History;
