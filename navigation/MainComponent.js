import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import History from "../screens/History/History";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#6C0345", // Change this to your desired color for active icons
          tabBarInactiveTintColor: "gray", // Change this to your desired color for inactive icons
          tabBarIndicatorStyle: {
            backgroundColor: "#6C0345", // Change this to your desired color for the indicator
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="history" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
