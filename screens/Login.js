import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 1]}
      colors={["#f8dcdc", "#b6c5db"]}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.bookingHotel}>BOOKING HOTEL</Text>
        <View style={[styles.loginChild, styles.loginLayout]} />
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
        <View style={[styles.loginItem, styles.loginLayout]} />
        <Pressable
          style={[styles.loginInner, styles.loginInnerLayout]}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        <View style={[styles.rectangleView, styles.loginInnerLayout]} />
        <Text style={[styles.daftar, styles.login1Typo]}>Daftar</Text>
        <Text style={[styles.loginUser, styles.usernameTypo]}>Login User</Text>
        <ImageBackground
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-6.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: 182,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_sm,
    left: 175,
    position: "absolute",
  },
  usernameTypo: {
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  loginInnerLayout: {
    height: 44,
    width: 147,
    backgroundColor: Color.gray_600,
    left: 130,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  login1Typo: {
    left: 170,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  bookingHotel: {
    top: 82,
    left: 37,
    fontSize: FontSize.size_4xl,
    fontWeight: "800",
    color: Color.indigo_100,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  loginChild: {
    top: 544,
    height: 31,
  },
  username: {
    top: 548,
    left: 51,
  },
  password: {
    top: 606,
    left: 55,
  },
  loginItem: {
    top: 602,
    height: 28,
  },
  loginInner: {
    top: 676,
  },
  login1: {
    top: 686,
  },
  rectangleView: {
    top: 756,
  },
  daftar: {
    top: 766,
  },
  loginUser: {
    top: 140,
    left: 152,
  },
  rectangleIcon: {
    marginTop: -185,
    top: "50%",
    left: 64,
    width: 262,
    height: 185,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  login: {
    height: 844,
    width: "100%",
  },
});

export default Login;
