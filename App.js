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
          hr REAL NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
          PxW REAL NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
          Saved REAL NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`,
        [],
        () => console.log("Table 'formula3' created successfully"),
        (_, error) => console.error("Error creating 'formula3' table:", error)
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS savings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          maH REAL NOT NULL,
          RPM REAL NOT NULL,
          Watts REAL NOT NULL,
          WPM REAL NOT NULL,
          WattsInDate REAL NOT NULL,
          Saved REAL NOT NULL,
          start_at TIMESTAMP,
          end_at TIMESTAMP
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`,
        [],
        () => console.log("Table 'savings' created successfully"),
        (_, error) => console.error("Error creating 'savings' table:", error)
      );
    });

    // Define a function to show the table description
    const showTableDescription = (tableName) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT sql FROM sqlite_master WHERE type='table' AND name=?;`,
            [tableName],
            (_, result) => {
              if (result.rows.length > 0) {
                const createStatement = result.rows.item(0).sql;
                console.log(`Description of table '${tableName}':`);
                console.log(createStatement);
              } else {
                console.log(`Table '${tableName}' not found.`);
              }
            },
            (_, error) => {
              console.error(
                `Error retrieving description of table '${tableName}':`,
                error
              );
            }
          );
        },
        (error) => {
          console.error("Transaction error:", error);
        }
      );
    };

    // Call the function to show the description of each table
    showTableDescription("formula1");
    showTableDescription("formula2");
    showTableDescription("formula3");
    showTableDescription("savings");
  }, []);

  return <MainComponent />;
}
