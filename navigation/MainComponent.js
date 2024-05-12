import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import History from "../screens/History/History";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Contact from "../screens/Contact/Contact";
import About from "../screens/About/About";
import Savings from "../screens/Savings/Savings";

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
          name="Savings"
          component={Savings}
          options={{
            tabBarLabel: "Savings",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="energy-savings-leaf"
                size={size}
                color={color}
              />
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
        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: "About:",
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="info" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact Us:",
            tabBarLabel: "Contact Us",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="wifi-calling-3" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
