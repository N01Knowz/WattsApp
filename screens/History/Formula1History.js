import React, { useState } from "react";
import { Text, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from "./History.css";
import ShowDataCard from "./Components/ShowDataCard";
import CustomModal from "../Components/CustomModal";
import { useFocusEffect } from "@react-navigation/native";

const db = SQLite.openDatabase("WattsApp");

const Formula1History = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState([]);
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
      const variable = await fetchTestData("formula1");
      setDatas(variable);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTestData = (tableName) => {
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
        `DELETE FROM formula1 WHERE id = ?`,
        [id],
        (_, result) => {
          console.log("Value deleted successfully:");
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
          label1={"Watt-Hour:"}
          value1={data.Wh}
          label2={"Watt:"}
          value2={data.W}
          onPress={() => handleCardPress(data)} // Pass the function to handle press event
          key={index}
        />
      ))}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Text style={styles.modalHeaderText}>History</Text>
        <Text style={styles.modalContentText}>Voltage {showData.V}</Text>
        <Text style={styles.modalContentText}>Watt {showData.W}</Text>
        <Text style={styles.modalContentText}>Watt-Hour {showData.Wh}</Text>
        <Text style={styles.modalContentText}>Hour: {showData.hr}</Text>
        <Text style={styles.modalContentText}>
          Milliampere-Hour: {showData.maH}
        </Text>
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

export default Formula1History;
