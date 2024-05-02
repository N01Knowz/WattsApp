import MainComponent from "./navigation/MainComponent";
import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("WattsApp");
export default function App() {
  useEffect(() => {
    // db.transaction((tx) => {
    //   // Create the table if it doesn't exist
    //   tx.executeSql(
    //     `DROP TABLE IF EXISTS formula1;`,
    //     [],
    //     () => console.log("Table 'formula1' deleted successfully"),
    //     (_, error) => console.error("Error delete 'formula1' table:", error)
    //   );
    // });
    
    db.transaction((tx) => {
      // Create the table if it doesn't exist
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
  }, []);

  // const saveResult = async () => {
  //   // Check if result is a valid number
  //   if (typeof result !== "number" || isNaN(result)) {
  //     alert("Invalid result. Please enter valid numeric values.");
  //     return;
  //   }

  //   db.transaction(
  //     (tx) => {
  //       tx.executeSql(
  //         `INSERT INTO test (value) VALUES (?)`,
  //         [result.toString()], // Insert the result value into the database
  //         (_, success) => {
  //           console.log("Result saved successfully:", result);
  //         },
  //         (_, error) => {
  //           console.error("Error saving result:", error);
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error("Transaction error:", error);
  //     }
  //   );
  //   try {
  //     variable1 = await fetchTestData();
  //     console.log("Fetched data:", variable1);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const fetchTestData = () => {
  //   return new Promise((resolve, reject) => {
  //     db.transaction(
  //       (tx) => {
  //         tx.executeSql(
  //           "SELECT * FROM test",
  //           [],
  //           (_, { rows }) => {
  //             const testData = [];
  //             for (let i = 0; i < rows.length; i++) {
  //               testData.push(rows.item(i));
  //             }
  //             resolve(testData); // Resolve with fetched data
  //           },
  //           (_, error) => {
  //             console.error("Error fetching data:", error);
  //             reject(error);
  //           }
  //         );
  //       },
  //       (error) => {
  //         console.error("Transaction error:", error);
  //         reject(error);
  //       }
  //     );
  //   });
  // };

  return <MainComponent />;
}
