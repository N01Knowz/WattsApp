import React from "react";
import { View, Modal } from "react-native";
import styles from "./CustomModal.css";

const CustomModal = ({
  children,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
