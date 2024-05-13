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
import CustomCard2 from "./Components/CustomCard2";
import CustomCard3 from "./Components/CustomCard3";
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
        <Text style={styles.boldh3}>{` Formula A:`}</Text>
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
        <Text style={styles.text1}>
          Where:
          {"\n"}
          {"\n"}
          {"\n"}maH = Milliampere-Hour
          {"\n"}V = Voltage
          {"\n"}Wh = Watts Per Hour
          {"\n"}W = Watt
        </Text>
        <View style={styles.cardContainer}>
          <CustomCard3
            title={"Watt hour example:"}
            t1={""}
            ftext={
              <DividedText upperText={"3000 maH x 12 V  "} lowerText={"1000"} />
            }
            f2text={" = 360 Wh"}
            f3text={""}
            f4text={<DividedText upperText={"360 Wh"} lowerText={"1 hr"} />}
            f5text={" = 360 W"}
          />
        </View>
        <Text style={styles.text1}>
          The device needs 36W to be fully charged. 12V is the machine constant
          3000matt can change depending on the users output.
        </Text>
        <View style={styles.viewLine} />
        <Text style={styles.boldh3}>{` Formula B:`}</Text>
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
        <Text style={styles.text1}>
          Where:{"\n"} {"\n"}PxW = power in watts, units is {"\n"}Wmin = watt
          per minute {"\n"}T = torque; wunits is {"\n"}Nm = Newton meter {"\n"}
          RPM = revolutions per minute {"\n"}Hp = horsepower {"\n"}5252,60,2π =
          formula constants
        </Text>
        <View style={styles.cardContainer}>
          <CustomCard3
            title={"Torque Example:"}
            t1={""}
            ftext={
              <DividedText upperText={"1/5 Hp x 5252"} lowerText={"70 RPM"} />
            }
            f2text={"= 15 Nm"}
          />
        </View>
        <View style={styles.cardContainer}>
          <CustomCard3
            title={"Power Example:"}
            t1={""}
            ftext={
              <DividedText
                upperText={"15 NM x 70 RPM x 2π "}
                lowerText={"60"}
              />
            }
            f2text={"= 35π ~ 110 W min"}
          />
        </View>
        <Text style={styles.text1}>
          Running the ChargeCycle Station at 70RPM will generate 110 W per
          minute. In 3-4 minutes the ChargeCycle Station will generate enough
          electricity to fully charge the digital device (generate electricity ≠
          time left intul full charge.) 1/5 hp is the constant horsepower of a
          human being using a bicycle 70 RPM can charge depending on the users
          input.
        </Text>
        <View style={styles.viewLine} />
        <Text style={styles.boldh3}>{` Formula C:`}</Text>
        <View style={styles.cardContainer}>
          <CustomCard2
            title={"₱ Saved"}
            t1={"₱ Saved ="}
            ftext={<DividedText upperText={"W"} lowerText={1000} />}
            f2text={"x hrs x days x ₱8.81"}
          />
        </View>

        <Text style={styles.text1}>
          Where:{"\n"} {"\n"}After using the ChargeCycle Station for 2 hours in
          2 days, the user saved up ₱12.67 360W can change depending on the
          input on A
        </Text>
        <View style={styles.cardContainer}>
          <CustomCard3
            title={"₱ Saved Example:"}
            t1={""}
            ftext={<DividedText upperText={"300 W"} lowerText={1000} />}
            f2text={"x 2hrs x 2days x ₱8.81 = ₱12.67"}
          />
        </View>
        <View style={styles.viewLine} />
      </View>
    </ScrollView>
  );
};

export default About;
