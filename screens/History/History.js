import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Formula1History from "./Formula1History";
import Formula2History from "./Formula2History";
import Formula3History from "./Formula3History";

const Tab = createMaterialTopTabNavigator();

const History = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "#6C0345",
        },
      }}
    >
      <Tab.Screen name="Formula A" component={Formula1History} />
      <Tab.Screen name="Formula B" component={Formula2History} />
      <Tab.Screen name="Formula C" component={Formula3History} />
    </Tab.Navigator>
  );
};

export default History;
