import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calculate from "./Calculate";
import History from "./History";

const Tab = createMaterialTopTabNavigator();

const Savings = () => {
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
      <Tab.Screen name="Calculate" component={Calculate} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default Savings;
