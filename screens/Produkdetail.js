import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const Produkdetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.produkdetail}>
      <View style={styles.kamarKing1KingRoomParent}>
        <Text style={[styles.kamarKing, styles.kamarKingTypo]}>
          Kamar King ( 1 King Room )
        </Text>
        <Text style={[styles.rp1500000, styles.kamarKingTypo]}>
          Rp. 1.500.000
        </Text>
        <Text style={styles.pemandanganKotaContainer}>
          <Text style={styles.pemandanganKota}>Pemandangan : Kota</Text>
          <Text style={styles.pemandanganKota}> </Text>
          <Text style={styles.pemandanganKota}>40 m2/ 431 ft2</Text>
          <Text style={styles.pemandanganKota}> </Text>
          <Text style={styles.pemandanganKota}>Pancuran</Text>
          <Text style={styles.pemandanganKota}> </Text>
          <Text style={styles.pemandanganKota}>1 Kasur king size</Text>
          <Text style={styles.pemandanganKota}> </Text>
          <Text style={styles.maks2Dewasa}>Maks. 2 Dewasa, 1 Balita</Text>
        </Text>
        <Text style={styles.hargaSudahTermasuk}>
          Harga sudah termasuk sarapan dan fasiitas hotel
        </Text>
        <Text style={styles.alilaSolo}>Alila Solo</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-27.png")}
        />
        <Pressable
          style={[styles.frameItem, styles.frameLayout1]}
          onPress={() => navigation.navigate("DataDiri")}
        />
        <Pressable
          style={[styles.pesan, styles.pesanPosition]}
          onPress={() => navigation.navigate("DataDiri")}
        >
          <Text style={[styles.pesan1, styles.pesan1Typo]}>PESAN</Text>
        </Pressable>
        <View style={[styles.frameInnerLayout, styles.frameLayout1]} />
        <Text
          style={[styles.jumlahKamar, styles.pesan1Typo, styles.pesanPosition]}
        >
          Jumlah Kamar
        </Text>
        <Text style={[styles.sebelum20Januari, styles.sebelum20JanuariTypo]}>
          sebelum 20 Januari 2023
        </Text>
        <Text
          style={[
            styles.pembatalanGratis,
            styles.sebelum20JanuariTypo,
            styles.frameInnerLayout,
          ]}
        >
          <Text style={styles.pemandanganKota}>Pembatalan Gratis</Text>
          <Text style={styles.maks2Dewasa}> </Text>
        </Text>
      </View>
      <View style={styles.produkdetailChild} />
      <Pressable
        style={[styles.wrapper, styles.frameLayout]}
        onPress={() => navigation.navigate("Profil")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-33.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("Notifikasi")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-32.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-31.png")}
        />
      </Pressable>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("Browse")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-76.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kamarKingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  frameLayout1: {
    height: 45,
    backgroundColor: Color.green,
    borderRadius: Border.br_lg,
    top: 685,
    position: "absolute",
  },
  pesanPosition: {
    top: 696,
    position: "absolute",
  },
  pesan1Typo: {
    fontWeight: "600",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
  },
  sebelum20JanuariTypo: {
    height: 24,
    top: 570,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  frameInnerLayout: {
    width: 171,
    left: 14,
  },
  frameLayout: {
    height: 43,
    position: "absolute",
  },
  groupChildPosition: {
    height: 66,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kamarKing: {
    top: 319,
    color: "#030303",
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
  },
  rp1500000: {
    top: 619,
    left: 236,
    fontWeight: "500",
    color: "#fa2222",
  },
  pemandanganKota: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  maks2Dewasa: {
    margin: Margin.m_md,
  },
  pemandanganKotaContainer: {
    top: 371,
    left: 29,
    width: 292,
    height: 234,
    color: Color.gray_700,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  hargaSudahTermasuk: {
    top: 615,
    width: 235,
    height: 28,
    left: 14,
    color: Color.gray_700,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  alilaSolo: {
    fontSize: 24,
    fontWeight: "700",
    top: 0,
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    left: 12,
    position: "absolute",
  },
  frameChild: {
    top: 43,
    width: 370,
    height: 262,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    left: 217,
    width: 118,
  },
  pesan1: {
    width: 78,
    color: Color.black,
  },
  pesan: {
    left: 246,
  },
  jumlahKamar: {
    left: 24,
    width: 151,
    color: Color.black,
  },
  sebelum20Januari: {
    left: 161,
    width: 207,
    color: Color.black,
  },
  pembatalanGratis: {
    color: Color.gray_700,
  },
  kamarKing1KingRoomParent: {
    top: 65,
    left: 10,
    width: 368,
    height: 715,
    position: "absolute",
  },
  produkdetailChild: {
    top: 781,
    height: 63,
    width: 390,
    backgroundColor: Color.gray_600,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 310,
    top: 787,
    width: 56,
  },
  container: {
    left: 168,
    top: 791,
    width: 54,
  },
  frame: {
    left: 16,
    top: 795,
    width: 61,
  },
  groupChild: {
    backgroundColor: Color.gray_600,
    height: 66,
  },
  rectanglePressable: {
    left: 20,
    top: 11,
    width: 36,
    height: 41,
    position: "absolute",
  },
  produkdetail: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Produkdetail;
