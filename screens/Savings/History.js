import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import CustomModal from "../Components/CustomModal";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../History/History.css";
import ShowDataCard from "../History/Components/ShowDataCard";
import moment from "moment";

const db = SQLite.openDatabase("WattsApp");

const History = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState([]);
  const [showData, setShowData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  // useEffect(() => {
  //   console.log(datas);
  // }, [datas]);

  const handleCardPress = (data) => {
    setModalVisible(true);
    setShowData(data);
  };
  const formatOutputDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY");
  };

  const getData = async () => {
    try {
      const variable = await fetchTestData("savings");
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
        `DELETE FROM savings WHERE id = ?`,
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
          label1={"Start:"}
          value1={data.start_at}
          label2={"End:"}
          value2={data.end_at}
          onPress={() => handleCardPress(data)} // Pass the function to handle press event
          key={index}
        />
      ))}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <Text style={styles.modalHeaderText}>Store these values?</Text>
        <Text style={styles.modalContentText}>
          Device Capacity: {showData.maH}
        </Text>
        <Text style={styles.modalContentText}>RPM: {showData.RPM}</Text>
        <Text style={styles.modalContentText}>Watts: {showData.Watts}</Text>
        <Text style={styles.modalContentText}>
          Watts per minute: {showData.WPM}
        </Text>
        <Text style={styles.modalContentText}>
          Watts generated: {showData.WattsInDate}
        </Text>
        <Text style={styles.modalContentText}>₱ Saved: {showData.Saved}</Text>
        <Text style={styles.modalContentText}>
          From: {formatOutputDate(showData.start_at)}
        </Text>
        <Text style={styles.modalContentText}>
          To: {formatOutputDate(showData.end_at)}
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

export default History;
