import * as React from "react";
import { View, Pressable, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <View style={[styles.pembayaran, styles.pembayaranLayout]}>
        <Pressable
          style={[styles.pembayaranChild, styles.pembayaranChildLayout]}
          onPress={() => navigation.navigate("Konfirmasi")}
        />
        <View
          style={[
            styles.pembayaranItem,
            styles.rectangleLayout,
            styles.rectangleViewLayout,
          ]}
        />
        <View
          style={[
            styles.pembayaranInner,
            styles.rectangleIconLayout,
            styles.pembayaranLayout,
          ]}
        />
        <Text style={styles.pembayaran1}>Pembayaran</Text>
        <Text style={[styles.totalPembayaran, styles.okTypo]}>
          Total Pembayaran : Rp. 1.652.500
        </Text>
        <View
          style={[
            styles.rectangleView,
            styles.rectangleLayout,
            styles.rectangleViewLayout,
          ]}
        />
        <View
          style={[
            styles.pembayaranChild1,
            styles.rectangleLayout,
            styles.rectangleIconLayout1,
            styles.pembayaranChildLayout,
          ]}
        />
        <Text style={[styles.pembayaranDalam, styles.bankBcaDicekTypo]}>
          Pembayaran dalam : 60 menit
        </Text>
        <Text style={[styles.bankBcaDicek, styles.bankBcaDicekTypo]}>
          Bank BCA (dicek otomatis)
        </Text>
        <Image
          style={[
            styles.rectangleIcon,
            styles.rectangleIconLayout,
            styles.rectangleLayout,
            styles.rectangleIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-75.png")}
        />
        <Text style={[styles.kodePembayaran, styles.kodePembayaranTypo]}>
          Kode Pembayaran
        </Text>
        <Text style={[styles.salin, styles.okTypo]}>Salin</Text>
        <Text style={[styles.bca1108977648983, styles.kodePembayaranTypo]}>
          BCA1108977648983
        </Text>
        <Text style={[styles.ok, styles.okTypo]}>OK</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("DataDiri")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-76.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pembayaranLayout: {
    width: 391,
    top: 0,
  },
  pembayaranChildLayout: {
    height: 48,
    position: "absolute",
  },
  rectangleLayout: {
    width: 375,
    borderRadius: Border.br_sm,
    left: 7,
  },
  rectangleViewLayout: {
    backgroundColor: Color.gray_500,
    width: 375,
    borderRadius: Border.br_sm,
    left: 7,
    height: 48,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 65,
    position: "absolute",
  },
  okTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  rectangleIconLayout1: {
    borderRadius: Border.br_sm,
    left: 7,
    width: 375,
  },
  bankBcaDicekTypo: {
    width: 341,
    color: Color.black,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  kodePembayaranTypo: {
    fontSize: FontSize.size_xl,
    width: 341,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  pembayaranChild: {
    top: 548,
    left: 104,
    borderRadius: 30,
    backgroundColor: "#e789c7",
    width: 186,
  },
  pembayaranItem: {
    top: 113,
  },
  pembayaranInner: {
    left: 0,
    backgroundColor: Color.gray_600,
  },
  pembayaran1: {
    top: 27,
    left: 76,
    color: Color.teal,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  totalPembayaran: {
    top: 125,
    width: 379,
    fontSize: FontSize.size_2xl,
    color: Color.black,
    left: 12,
  },
  rectangleView: {
    top: 163,
  },
  pembayaranChild1: {
    top: 245,
    backgroundColor: Color.gray_400,
  },
  pembayaranDalam: {
    top: 175,
    left: 12,
    width: 341,
  },
  bankBcaDicek: {
    top: 259,
    left: 9,
  },
  rectangleIcon: {
    top: 295,
  },
  kodePembayaran: {
    top: 299,
    left: 9,
  },
  salin: {
    top: 333,
    left: 326,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    width: 93,
  },
  bca1108977648983: {
    top: 331,
    left: 8,
  },
  ok: {
    top: 560,
    left: 182,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  pembayaran: {
    left: -1,
    backgroundColor: Color.gray_100,
    height: 853,
    position: "absolute",
    overflow: "hidden",
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
  checkout: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Checkout;
