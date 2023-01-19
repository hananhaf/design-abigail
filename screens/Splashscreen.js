import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1]}
      colors={["#f8dcdc", "#b6c5db"]}
    >
      <Pressable
        style={[styles.pressable, styles.iconLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Pressable
          style={styles.bookingHotel}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.bookingHotel1}>BOOKING HOTEL</Text>
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-6.png")}
          />
        </Pressable>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bookingHotel1: {
    fontSize: FontSize.size_4xl,
    fontWeight: "800",
    fontFamily: FontFamily.inter,
    color: Color.indigo_100,
    textAlign: "center",
  },
  bookingHotel: {
    left: 29,
    top: 543,
    position: "absolute",
  },
  icon: {
    marginTop: -93,
  },
  wrapper: {
    left: 72,
    top: "50%",
    width: 262,
    height: 185,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  splashscreen: {
    height: 844,
    width: "100%",
  },
});

export default Splashscreen;
