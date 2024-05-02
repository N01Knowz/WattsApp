import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Formula1 from "./Formula1";
import Formula2 from "./Formula2";
import Formula3 from "./Formula3";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
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
      <Tab.Screen name="Formula A" component={Formula1} />
      <Tab.Screen name="Formula B" component={Formula2} />
      <Tab.Screen name="Formula C" component={Formula3} />
    </Tab.Navigator>
  );
};

export default Home;
