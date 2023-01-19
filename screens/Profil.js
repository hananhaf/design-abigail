import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profil}>
      <View style={[styles.profil1, styles.profilPosition]}>
        <View
          style={[styles.profilChild, styles.childBg, styles.profilPosition]}
        />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-76.png")}
          />
        </Pressable>
        <Text style={[styles.profil2, styles.profilTypo]}>Profil</Text>
        <View style={styles.profilItem} />
        <Text style={[styles.abigailJonggitaPutri, styles.textTypo]}>
          Abigail Jonggita Putri
        </Text>
        <Text style={[styles.text, styles.textTypo]}>+62357648290</Text>
        <Image
          style={styles.profilInner}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <View style={styles.rectangleView} />
        <Text style={[styles.lihatProfilSaya, styles.profilTypo]}>
          Lihat profil Saya
        </Text>
        <View style={[styles.bottom, styles.bottomLayout]}>
          <View style={[styles.bottomLayout, styles.childBg]} />
          <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("Profil")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-33.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frame, styles.framePosition]}
            onPress={() => navigation.navigate("Notifikasi")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-32.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectanglePressable, styles.framePosition]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/rectangle-31.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.gray_600,
    top: 0,
  },
  profilTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  bottomLayout: {
    height: 63,
    width: 390,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    top: 9,
    height: 43,
    position: "absolute",
  },
  profilChild: {
    height: 70,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 20,
    top: 11,
    width: 36,
    height: 41,
    position: "absolute",
  },
  profil2: {
    top: 33,
    left: 92,
    color: Color.teal,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
  },
  profilItem: {
    top: 114,
    left: 7,
    borderRadius: 15,
    backgroundColor: "#cce1d5",
    width: 375,
    height: 187,
    position: "absolute",
  },
  abigailJonggitaPutri: {
    top: 159,
    left: 136,
  },
  text: {
    top: 183,
    left: 134,
  },
  profilInner: {
    top: 140,
    left: 28,
    width: 90,
    height: 86,
    position: "absolute",
  },
  rectangleView: {
    top: 245,
    left: 104,
    borderRadius: Border.br_lg,
    backgroundColor: "#81a891",
    width: 220,
    height: 36,
    position: "absolute",
  },
  lihatProfilSaya: {
    top: 251,
    left: 140,
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  container: {
    left: 310,
    top: 8,
    width: 56,
    height: 43,
    position: "absolute",
  },
  frame: {
    left: 168,
    width: 54,
  },
  rectanglePressable: {
    left: 16,
    width: 61,
  },
  bottom: {
    top: 781,
  },
  profil1: {
    backgroundColor: Color.gray_100,
    top: 0,
    width: 390,
    left: 0,
    overflow: "hidden",
    height: 844,
  },
  profil: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default Profil;
