import React from "react";
import { Text, View } from "react-native";
import styles from "./Contact.css";
import CustomCard from "./Components/CustomCard";
import DividedText from "./Components/DividedText";
import ShowDataCard from "./Components/ShowDataCard";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Contact = () => {
  return (
    <View style={styles.container}>
      <CustomCard
        title={"Contact Us"}
        t1={
          "For any questions or queries, contact our social media representatives:"
        }
        // ftext={<DividedText upperText={"T x RPM x 2π"} lowerText={"60"} />}
      />
      {/* <Text style={styles.contactText}>
        For any questions or queries, contact our social media representatives:
      </Text> */}

      <ShowDataCard
        label1={<Entypo name="facebook" size={25} color="blue" />}
        label2={"Earara Gabri on Facebook"}
      />
      <ShowDataCard
        label1={<Entypo name="facebook" size={25} color="blue" />}
        label2={"Noel Silverturon on Facebook"}
      />
      <ShowDataCard
        label1={<AntDesign name="instagram" size={25} color="#FD1D1D" />}
        label2={"@ peoklom on Instagram"}
      />
      <ShowDataCard
        label1={
          <MaterialCommunityIcons name="gmail" size={25} color="#08851b" />
        }
        label2={" temmiesilveron@gmail.com"}
      />
      <ShowDataCard
        label1={
          <MaterialCommunityIcons
            name="microsoft-outlook"
            size={24}
            color="black"
          />
        }
        label2={" njSilveron@mcm.edu.ph"}
      />
      {/* <Text style={styles.contactText}>@Earara Gabri on Facebook</Text>
      <Text style={styles.contactText}>@peoklom on Instagram</Text>
      <Text style={styles.contactText}>temmiesilveron@gmail.com on Gmail</Text>
      <Text style={styles.contactText}>njSilveron@mcm.edu.ph on Outlook</Text>
      <Text style={styles.contactText}>Noel Silverturon on Facebook</Text> */}
    </View>
  );
};

export default Contact;
