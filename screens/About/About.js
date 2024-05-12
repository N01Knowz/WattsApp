import React, { useEffect } from "react";
import {
  Image,
  FlatList,
  ScrollView,
  Text,
  View,
  Dimensions,
} from "react-native";
import styles from "./About.css";

import DividedText from "./Components/DividedText";
import CustomCard from "./Components/CustomCard";
import ShowDataCard from "./Components/ShowDataCard";
import CustomCard2 from "../Home/Components/CustomCard2";

const About = () => {
  const data = [
    { id: "1", title: "Item 1", image: require("../../assets/noel.jpg") },
    { id: "2", title: "Item 2", image: require("../../assets/hamzar.jpg") },
    { id: "3", title: "Item 3", image: require("../../assets/justin.jpg") },
    { id: "4", title: "Item 4", image: require("../../assets/ryme.jpg") },
    { id: "5", title: "Item 5", image: require("../../assets/eara.jpg") },
    { id: "6", title: "Item 6", image: require("../../assets/shayne.jpg") },
    { id: "7", title: "Item 7", image: require("../../assets/alex.png") },
    // Add more items as needed
  ];

  const flatListRef = React.useRef(null);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: (currentIndex + 1) % data.length,
          animated: true,
        });
      }
    }, 10000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  let currentIndex = 0;

  const renderItem = ({ item }) => (
    <View
      style={{
        height: 250,
        padding: 3,
        margin: 1,
        borderRadius: 3,
        width: screenWidth * 0.8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        shadowColor: "#000", // For iOS
        shadowOffset: { width: 0, height: 5 }, // For iOS
        shadowOpacity: 0.2, // For iOS
        shadowRadius: 2, // For iOS
        elevation: 2, // For Android
      }}
    >
      <Image source={item.image} style={{ width: "100%", height: "100%" }} />
    </View>
  );

  const onViewableItemsChanged = ({ viewableItems }) => {
    currentIndex = viewableItems[0]?.index ?? 0;
  };

  return (
    <ScrollView>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/mcm_logo.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.boldHeader}>About us</Text>
        <Text style={styles.boldh2}>Meet the devs</Text>
        <Text style={styles.text1}>
          The developers of this project are senior high school students in
          their final year from the Mapua Malayan Colleges of Mindanao.
        </Text>
        <Text style={styles.text1}>
          From the picture, starting from left to right, the developers are Noel
          Silveron, Hamzar Ali, Justin Acas, Ryme Bayhonan, Eara Pardo, Shayne
          Tuazon, and Alexandra Donal:
        </Text>

        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            snapToInterval={screenWidth * 0.8} // Adjusted width as a percentage of the window width
            decelerationRate={"fast"} // Speed of deceleration
            onViewableItemsChanged={onViewableItemsChanged}
            // onScrollToIndexFailed={onScrollToIndexFailed}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        <Text style={styles.boldHeader}>About chargecycle</Text>
        <Text style={styles.text1}>
          The ChargeCycle Station & Application is a project conducted by the
          developers with the main purpose of creating a clean and consistent
          source of electricity for charging digital devices. The main
          demographic that the developers aim to assist with this project are
          those residents of Davao City living in rural areas, whose access to
          electricity is inconsistent and out of their control.
        </Text>
        <View style={styles.stationImageContainer}>
          <Image
            source={require("../../assets/Station.jpg")}
            style={styles.stationImage}
          />
        </View>

        <Text style={styles.boldh2}>How to find the data necessary:</Text>
        <Text
          style={{
            paddingHorizontal: "5%",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          A. Device Capacity:
        </Text>
        <Text
          style={{
            paddingHorizontal: "10%",
            fontSize: 15,
            fontWeight: "400",
            marginBottom: 10,
          }}
        >
          Device capacity can be found using these steps:
        </Text>
        <Text style={styles.text2}>
          1. Open Settings. {"\n"}2. Open about phone or device information.{" "}
          {"\n"}3. Look for battery information. {"\n"}4. Find battery capacity.
        </Text>

        <Text
          style={{
            paddingLeft: "46%",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          OR
        </Text>
        <Text style={styles.text2}>
          1. Look up your device on google. {"\n"}2. Check the device
          specifications.
          {"\n"}3. Find battery capacity.
        </Text>
        <Text style={styles.text1}>
          If your device capacity is not measured in maH, convert it into maH
          using sites available at google.
        </Text>
        <Text
          style={{
            paddingHorizontal: "5%",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          B. RPM:
        </Text>
        <Text style={styles.text1}>
          Your personal RPM can be calculated using these steps:
        </Text>
        <Text style={styles.text2}>
          1. Mount the ChargeCycle Station. {"\n"}2. Find a pedaling speed that
          you are confident you can maintain for 1 min. {"\n"}3. Set up a timer
          for 1 min.
          {"\n"}4. Pedal at the speed you estimated earlier while counting how
          many times your right leg completed one revolution. (It is best to
          keep track when your right leg rises.)
        </Text>
        <Text style={styles.text1}>
          The formulas that were used in the ChargeCycle Application will be
          explained and listed below:
        </Text>

        <View style={styles.cardContainer}>
          <CustomCard
            title={"Watt-hour"}
            t1={"Wh ="}
            ftext={<DividedText upperText={"maH x V"} lowerText={"1000"} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomCard
            title={"Watt-hour"}
            t1={"Wh ="}
            ftext={<DividedText upperText={"W"} lowerText={"hr"} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomCard
            title={"Torque"}
            t1={"T ="}
            ftext={<DividedText upperText={"Hp x 5252"} lowerText={"RPM"} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomCard
            title={"Power in Watts"}
            t1={"PxW ="}
            ftext={<DividedText upperText={"T x RPM x 2π"} lowerText={"60"} />}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomCard2
            title={"₱ Saved"}
            t1={"₱Saved ="}
            ftext={<DividedText upperText={"W"} lowerText={1000} />}
            f2text={"x hrs x days x ₱8.81"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
