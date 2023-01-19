import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Konfirmasi = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.konfirmasi, styles.berhasilLayout]}>
      <View
        style={[
          styles.berhasil,
          styles.berhasilPosition,
          styles.berhasilLayout,
        ]}
      >
        <View style={[styles.berhasilChild, styles.berhasilPosition]} />
        <Text style={styles.transaksi}>Transaksi</Text>
        <Text style={[styles.selamat, styles.selamatTypo]}>Selamat!</Text>
        <Text style={[styles.transaksiAndaBerhasil, styles.selamatTypo]}>
          Transaksi anda berhasil
        </Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Notifikasi")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-78.png")}
          />
        </Pressable>
        <Text style={[styles.lihatInvoice, styles.selamatTypo]}>
          Lihat Invoice
        </Text>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-76.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  berhasilLayout: {
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.gray_100,
  },
  berhasilPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  selamatTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  berhasilChild: {
    top: 0,
    backgroundColor: Color.gray_600,
    height: 66,
  },
  transaksi: {
    top: 26,
    left: 59,
    color: Color.teal,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  selamat: {
    top: 438,
    left: 104,
    fontSize: FontSize.size_4xl,
    width: 220,
  },
  transaksiAndaBerhasil: {
    top: 496,
    left: 24,
    fontSize: 30,
    width: 510,
  },
  icon: {
    borderRadius: Border.br_lg,
  },
  wrapper: {
    left: 72,
    top: 609,
    width: 252,
    height: 37,
    position: "absolute",
  },
  lihatInvoice: {
    top: 616,
    left: 136,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  container: {
    left: 6,
    top: 18,
    width: 36,
    height: 41,
    position: "absolute",
  },
  berhasil: {
    top: 1,
    height: 844,
    backgroundColor: Color.gray_100,
    width: 390,
    left: 0,
  },
  konfirmasi: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.gray_100,
  },
});

export default Konfirmasi;
