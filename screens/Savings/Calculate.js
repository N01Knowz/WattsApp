import React, { useEffect, useRef, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import InputWithText from "./Components/InputWithText";
import { Calendar } from "react-native-calendars";
import styles from "./Calculate.css";
import { TouchableOpacity } from "react-native";
import moment from "moment";
import CustomModal from "../Components/CustomModal";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WattsApp");

const Calculate = () => {
  const [maH, setmaH] = useState();
  const [RPM, setRPM] = useState();
  const [watts, setWatts] = useState();
  const [wattsToday, setWattsToday] = useState();
  const [saved, setSaved] = useState();
  const [elecRPM, setElecRPM] = useState("");
  const [selected, setSelected] = useState("Day");
  const [modalVisible, setModalVisible] = useState(false);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const [selectedDay, setSelectedDay] = useState({
    start: formattedDate,
    end: formattedDate,
  });

  const changeOnSelectedDays = (value) => {
    setSelected(value);
    defaultSelectedDay();
  };

  const defaultSelectedDay = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDay({
      start: formattedDate,
      end: formattedDate,
    });
  };

  const [daysUsed, setDaysUsed] = useState(1);

  const getSelectedDay = (day) => {
    if (selected == "Day") {
      setSelectedDay({ start: day.dateString, end: day.dateString });
      setDaysUsed(1);
    } else if (selected == "Week") {
      const monthStart = moment([day.year, day.month - 1]).startOf("month");
      const monthEnd = moment([day.year, day.month - 1]).endOf("month");

      const selectedDate = moment(day.dateString);
      let startOfWeek = moment(selectedDate).startOf("week");
      let endOfWeek = moment(selectedDate).endOf("week");

      // Ensure start of week is not before the 1st day of the month
      if (startOfWeek.isBefore(monthStart)) {
        startOfWeek = moment(monthStart);
      }

      // Ensure end of week is not after the last day of the month
      if (endOfWeek.isAfter(monthEnd)) {
        endOfWeek = moment(monthEnd);
      }

      const daysUsed = endOfWeek.diff(startOfWeek, "days") + 1; // Adding 1 to include both the start and end days

      setSelectedDay({
        start: startOfWeek.format("YYYY-MM-DD"),
        end: endOfWeek.format("YYYY-MM-DD"),
      });

      setDaysUsed(daysUsed);
    } else if (selected == "Month") {
      const monthStart = moment([day.year, day.month - 1])
        .startOf("month")
        .format("YYYY-MM-DD");
      const monthEnd = moment([day.year, day.month - 1])
        .endOf("month")
        .format("YYYY-MM-DD");

      setSelectedDay({
        start: monthStart,
        end: monthEnd,
      });

      const daysUsed = moment(monthEnd).diff(monthStart, "days") + 1;
      setDaysUsed(daysUsed);
    }
  };

  useEffect(() => {
    if (!isNaN(wattsToday)) {
      const moneySaved = ((wattsToday / 1000) * hr * daysUsed * 8.81).toFixed(
        2
      );
      setSaved(moneySaved);
    }
  }, [wattsToday, daysUsed]);

  const [selectedCalculationLabel, setSelectedCalculationLabel] =
    useState("today");
  const Hp = 0.2;
  const Voltage = 12;
  const hr = 1;

  useEffect(() => {
    if (selected == "Day") {
      setSelectedCalculationLabel("today");
    } else if (selected == "Week") {
      setSelectedCalculationLabel("this week");
    } else {
      setSelectedCalculationLabel("this month");
    }
  }, [selected]);

  useEffect(() => {
    if (!isNaN(maH)) {
      setWatts((((parseFloat(maH) * Voltage) / 1000) * hr).toString());
    }
    if (!maH) {
      setWatts("");
    }
  }, [maH]);

  useEffect(() => {
    if (!isNaN(RPM) && RPM !== 0 && RPM) {
      // Calculate torque using the given formula
      const Torque = ((Hp * 5252) / parseFloat(RPM)).toFixed(2);

      // Calculate power using torque and RPM
      const Power = (Torque * RPM * 2 * Math.PI) / 60;

      // Set the value of ElecRPM to the calculated power
      setElecRPM(Power.toFixed(2).toString());
    } else {
      setElecRPM("");
    }
  }, [RPM]);

  function getDatesBetween(startDate, endDate) {
    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }
  const formatOutputDate = (dateString) => {
    return moment(dateString).format("MMMM DD, YYYY");
  };

  const saveResult = async () => {
    const maHValue = parseFloat(maH);
    const RPMValue = parseFloat(RPM);
    const WValue = parseFloat(watts);
    const WPMValue = parseFloat(elecRPM);
    const WattsGenerated = parseFloat(wattsToday);
    const savedValue = parseFloat(saved);

    if (
      isNaN(maHValue) ||
      isNaN(RPMValue) ||
      isNaN(WPMValue) ||
      isNaN(WValue) ||
      isNaN(WattsGenerated) ||
      isNaN(savedValue)
    ) {
      alert("Invalid input. Please enter valid numeric values to all inputs.");
      return;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          `INSERT INTO savings (maH, RPM, Watts, WPM, WattsInDate, Saved, start_at, end_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            maHValue,
            RPMValue,
            WValue,
            WPMValue,
            WattsGenerated,
            savedValue,
            selectedDay.start,
            selectedDay.end,
          ],
          (_, result) => {
            setmaH("");
            setRPM("");
            setWatts("");
            setElecRPM("");
            setWattsToday("");
            setSaved("");
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

  return (
    <ScrollView>
      <View style={styles.innerContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {
              getSelectedDay(day);
            }}
            onMonthChange={(month) => {
              getSelectedDay(month);
            }}
            markedDates={{
              [selectedDay.start]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
              [selectedDay.end]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
              ...Object.fromEntries(
                getDatesBetween(
                  new Date(selectedDay.start),
                  new Date(selectedDay.end)
                ).map((date) => [
                  date,
                  {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: "orange",
                  },
                ])
              ),
            }}
          />
        </View>
        <View style={styles.selectCalculationType}>
          <TouchableOpacity
            style={[
              styles.button,
              selected === "Day" ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => changeOnSelectedDays("Day")}
          >
            <Text style={styles.buttonText}>Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selected == "Week" ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => changeOnSelectedDays("Week")}
          >
            <Text style={styles.buttonText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selected == "Month" ? styles.buttonActive : styles.buttonInactive,
            ]}
            onPress={() => changeOnSelectedDays("Month")}
          >
            <Text style={styles.buttonText}>Month</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <InputWithText
            value={maH}
            setValue={setmaH}
            label={"Device Capacity:"}
            unit={"maH"}
          />
          <InputWithText
            value={RPM}
            setValue={setRPM}
            label={"RPM the user can generate:"}
            unit={"RPM"}
          />
          <InputWithText
            value={watts}
            setValue={setWatts}
            label={"Watts needed to charge the digital device:"}
            unit={"Watts"}
            editable={false}
          />
          <InputWithText
            value={elecRPM}
            setValue={setElecRPM}
            label={"Electricity generated in relation to rpm:"}
            unit={"Watts per minute"}
            editable={false}
          />
          <InputWithText
            value={wattsToday}
            setValue={setWattsToday}
            label={`Watts generated ${selectedCalculationLabel}:`}
            unit={"Watts"}
          />
          <InputWithText
            value={saved}
            setValue={setSaved}
            label={`₱ Saved ${selectedCalculationLabel}:`}
            unit={"Pesos"}
            editable={false}
          />
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
          <Text style={styles.modalContentText}>Device Capacity: {maH}</Text>
          <Text style={styles.modalContentText}>RPM: {RPM}</Text>
          <Text style={styles.modalContentText}>Watts: {watts}</Text>
          <Text style={styles.modalContentText}>
            Watts per minute: {elecRPM}
          </Text>
          <Text style={styles.modalContentText}>
            Watts generated: {wattsToday}
          </Text>
          <Text style={styles.modalContentText}>₱ Saved: {saved}</Text>
          <Text style={styles.modalContentText}>
            From: {formatOutputDate(selectedDay.start)}
          </Text>
          <Text style={styles.modalContentText}>
            To: {formatOutputDate(selectedDay.end)}
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
              onPress={saveResult}
            >
              <Text style={styles.modalTextButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </CustomModal>
      </View>
    </ScrollView>
  );
};

export default Calculate;
