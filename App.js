import MainComponent from "./navigation/MainComponent";
import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WattsApp");
export default function App() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS formula1 (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          maH REAL NOT NULL,
          V REAL NOT NULL,
          Wh REAL NOT NULL,
          W REAL NOT NULL,
          hr REAL NOT NULL
        );`,
        [],
        () => console.log("Table 'formula1' created successfully"),
        (_, error) => console.error("Error creating 'formula1' table:", error)
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS formula2 (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          Hp REAL NOT NULL,
          RPM REAL NOT NULL,
          T REAL NOT NULL,
          PxW REAL NOT NULL
        );`,
        [],
        () => console.log("Table 'formula2' created successfully"),
        (_, error) => console.error("Error creating 'formula2' table:", error)
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS formula3 (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          W REAL NOT NULL,
          hrs REAL NOT NULL,
          Days INTEGER NOT NULL,
          Saved REAL NOT NULL
        );`,
        [],
        () => console.log("Table 'formula3' created successfully"),
        (_, error) => console.error("Error creating 'formula3' table:", error)
      );
    });
  }, []);

  return <MainComponent />;
}
