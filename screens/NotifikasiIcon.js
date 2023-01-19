import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const NotifikasiIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.notifikasiIcon}
      resizeMode="cover"
      source={require("../assets/notifikasi.png")}
    >
      <View style={[styles.notifikasi, styles.notifikasiPosition]}>
        <View
          style={[
            styles.notifikasiChild,
            styles.childBg,
            styles.notifikasiPosition,
          ]}
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
        <Text style={styles.historyTransaksi}>History Transaksi</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupPosition, styles.groupChildLayout]} />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/rectangle-193.png")}
          />
          <Text style={styles.hargaTermasukPembatalan}>
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text style={[styles.pesan, styles.pesanTypo]}>Swiss-Bel Hotel</Text>
          <Text
            style={[styles.rp857500, styles.rp857500Layout, styles.pesanTypo]}
          >
            Rp. 857.500
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupLayout, styles.groupPosition]} />
          <Text style={[styles.rp450000, styles.pesan1Typo]}>Rp. 450.000</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-194.png")}
          />
          <Text style={[styles.hargaTermasukPembatalan1, styles.hargaTypo]}>
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text style={[styles.pesan1, styles.pesan1Typo]}>
            The Sunan Solo Hotel
          </Text>
        </View>
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
        <Text style={[styles.sudahAndaPesan, styles.dalamProsesTypo]}>
          Sudah Anda Pesan
        </Text>
        <Text style={[styles.dalamProses, styles.dalamProsesTypo]}>
          Dalam Proses
        </Text>
        <Pressable
          style={[styles.rectangleContainer, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Produkdetail")}
        >
          <View style={[styles.rectangleLayout, styles.groupPosition]} />
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/rectangle-195.png")}
          />
          <Text style={[styles.hargaTermasukPembatalan2, styles.hargaTypo]}>
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text style={[styles.pesan2, styles.pesan2Typo]}>Alila Solo</Text>
          <Text
            style={[styles.rp997500, styles.pesan2Typo, styles.rp857500Layout]}
          >
            Rp. 997.500
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  notifikasiPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.gray_600,
    top: 0,
  },
  groupChildLayout: {
    height: 194,
    width: 333,
    position: "absolute",
  },
  pesanTypo: {
    color: Color.black,
    fontWeight: "700",
    top: 140,
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rp857500Layout: {
    width: 86,
    height: 24,
  },
  groupLayout: {
    height: 185,
    width: 344,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  pesan1Typo: {
    top: 129,
    color: Color.black,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  hargaTypo: {
    height: 20,
    color: Color.purple,
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  dalamProsesTypo: {
    width: 188,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
    left: 20,
    position: "absolute",
  },
  rectangleLayout: {
    height: 173,
    width: 344,
    position: "absolute",
  },
  pesan2Typo: {
    top: 112,
    color: Color.black,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  notifikasiChild: {
    height: 70,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 11,
    width: 36,
    height: 41,
    left: 20,
    position: "absolute",
  },
  historyTransaksi: {
    top: 23,
    left: 103,
    fontWeight: "600",
    color: Color.teal,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  groupItem: {
    top: 15,
    width: 238,
    height: 125,
    left: 16,
    position: "absolute",
  },
  hargaTermasukPembatalan: {
    top: 171,
    left: 17,
    width: 296,
    height: 23,
    color: Color.purple,
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  pesan: {
    width: 187,
    height: 14,
    left: 16,
  },
  rp857500: {
    left: 162,
    height: 24,
  },
  rectangleParent: {
    top: 345,
    left: 20,
  },
  rp450000: {
    left: 191,
    width: 79,
    height: 24,
  },
  rectangleIcon: {
    top: 20,
    width: 237,
    height: 109,
    left: 25,
    position: "absolute",
  },
  hargaTermasukPembatalan1: {
    top: 153,
    width: 322,
    left: 22,
  },
  pesan1: {
    width: 138,
    height: 12,
    left: 22,
  },
  rectangleGroup: {
    top: 572,
    left: 20,
  },
  container: {
    left: 310,
    width: 56,
    height: 43,
    top: 8,
    position: "absolute",
  },
  frame: {
    left: 168,
    width: 54,
  },
  rectanglePressable: {
    width: 61,
    left: 16,
  },
  bottom: {
    top: 781,
  },
  sudahAndaPesan: {
    top: 306,
  },
  dalamProses: {
    top: 89,
  },
  groupChild1: {
    left: 24,
    width: 199,
    height: 104,
    top: 8,
    position: "absolute",
  },
  hargaTermasukPembatalan2: {
    top: 145,
    left: 18,
    width: 251,
  },
  pesan2: {
    width: 92,
    height: 12,
    left: 25,
  },
  rp997500: {
    left: 227,
    height: 24,
  },
  rectangleContainer: {
    top: 124,
    left: 20,
  },
  notifikasi: {
    backgroundColor: Color.gray_100,
    top: 0,
    width: 390,
    left: 0,
    overflow: "hidden",
    height: 844,
  },
  notifikasiIcon: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default NotifikasiIcon;
