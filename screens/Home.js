import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#f8dcdc", "#94b4e4"]}
    >
      <Text style={styles.bookingHotel}>BOOKING HOTEL</Text>
      <Image
        style={styles.undrawTravelTogetherReKjf2Icon}
        resizeMode="cover"
        source={require("../assets/undraw-travel-together-re-kjf2removebgpreview-1.png")}
      />
      <View style={[styles.homeChild, styles.homeChildLayout]} />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.rectangleView, styles.homeChild1Layout]} />
      <Text
        style={[styles.kemanaAndaIngin, styles.searchTypo, styles.searchTypo1]}
      >
        Kemana anda ingin pergi ?
      </Text>
      <Text style={[styles.cekIn, styles.cekTypo]}>
        <Text style={styles.cekIn1}>Cek-in</Text>
      </Text>
      <Text style={[styles.jan2023, styles.janTypo]}>20 Jan 2023</Text>
      <View style={[styles.homeChild1, styles.homeChild1Layout]} />
      <View style={[styles.homeChild1, styles.homeChild1Layout]} />
      <Text style={[styles.cekOut, styles.cekTypo]}>
        <Text style={styles.cekIn1}>Cek-out</Text>
      </Text>
      <Text style={[styles.jan20231, styles.janTypo]}>22 Jan 2023</Text>
      <Text style={[styles.kamar2Dewasa, styles.searchTypo]}>
        1 Kamar, 2 Dewasa, 0 Anak
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Browse")}
      />
      <Text style={[styles.search, styles.searchTypo, styles.searchTypo1]}>
        SEARCH
      </Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-80.png")}
      />
      <Image
        style={[styles.homeChild3, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={[styles.homeChild4, styles.homeChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-81.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
    height: 36,
    width: 37,
    top: 554,
    position: "absolute",
  },
  homeLayout: {
    height: 49,
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_300,
    position: "absolute",
  },
  homeChild1Layout: {
    height: 90,
    width: 154,
    top: 536,
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_300,
    position: "absolute",
  },
  searchTypo: {
    color: Color.black,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  searchTypo1: {
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_3xl,
  },
  cekTypo: {
    top: 548,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  janTypo: {
    fontWeight: "300",
    fontSize: FontSize.size_base,
    top: 581,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  bookingHotel: {
    top: 76,
    fontSize: FontSize.size_4xl,
    fontWeight: "800",
    color: "#052665",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: 33,
    position: "absolute",
  },
  undrawTravelTogetherReKjf2Icon: {
    top: 124,
    left: 68,
    width: 253,
    height: 284,
    position: "absolute",
  },
  homeChild: {
    backgroundColor: Color.gray_300,
    height: 36,
    width: 37,
    left: 217,
    top: 554,
  },
  homeItem: {
    top: 467,
    left: 46,
    width: 298,
  },
  homeInner: {
    top: 658,
    width: 318,
    left: 33,
    height: 49,
  },
  rectangleView: {
    left: 29,
  },
  kemanaAndaIngin: {
    top: 480,
    left: 91,
  },
  cekIn1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  cekIn: {
    left: 104,
  },
  jan2023: {
    left: 91,
  },
  homeChild1: {
    left: 200,
  },
  cekOut: {
    left: 269,
  },
  jan20231: {
    left: 262,
  },
  kamar2Dewasa: {
    top: 671,
    left: 63,
    color: Color.black,
    fontSize: FontSize.size_3xl,
  },
  rectanglePressable: {
    top: 752,
    left: 122,
    backgroundColor: Color.gray_200,
    width: 147,
    height: 44,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  search: {
    top: 762,
    left: 154,
  },
  rectangleIcon: {
    top: 476,
    left: 52,
    width: 32,
    height: 28,
    position: "absolute",
  },
  homeChild3: {
    left: 47,
    height: 36,
    width: 37,
    top: 554,
  },
  homeChild4: {
    left: 217,
    height: 36,
    width: 37,
    top: 554,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Home;
