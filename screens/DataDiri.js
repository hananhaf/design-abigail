import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DataDiri = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dataDiri, styles.dataDiriLayout]}>
      <View
        style={[
          styles.checkout,
          styles.checkoutPosition,
          styles.dataDiriLayout,
        ]}
      >
        <View style={[styles.checkoutChild, styles.childPosition]} />
        <Text style={[styles.buktiPemesanan, styles.buktiPemesananTypo]}>
          Bukti Pemesanan
        </Text>
        <Image
          style={[styles.checkoutItem, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.checkoutPosition]}>
        <Pressable
          style={[styles.frameChild, styles.childPosition]}
          onPress={() => navigation.navigate("Checkout")}
        />
        <Text
          style={[
            styles.pilihMetodePembayaran,
            styles.metodeTypo,
            styles.frameItemPosition,
            styles.buktiPemesananTypo,
          ]}
        >
          Pilih Metode Pembayaran
        </Text>
        <Text
          style={[styles.metodePembayaran, styles.bayarTypo, styles.metodeTypo]}
        >
          Metode Pembayaran
        </Text>
        <Text style={styles.rincianPembayaran}>Rincian Pembayaran</Text>
        <Text style={[styles.totalPembayaran, styles.rp1652500Typo]}>
          Total Pembayaran
        </Text>
        <Text style={[styles.rp1652500, styles.rp1652500Typo]}>
          Rp. 1.652.500
        </Text>
        <Text style={[styles.subtotalPembayaran, styles.rp1500000Typo]}>
          Subtotal Pembayaran
        </Text>
        <Text style={[styles.rp1500000, styles.rp1500000Typo]}>
          Rp. 1.500.000
        </Text>
        <Text style={[styles.rp2500, styles.rp2500Typo]}>Rp. 2.500</Text>
        <Text style={[styles.rp150000, styles.rp150000Typo]}>Rp. 150.000</Text>
        <Text style={[styles.biayaLayanan10, styles.rp150000Typo]}>
          Biaya Layanan (10%)
        </Text>
        <Text style={[styles.biayaPembayaran, styles.rp2500Typo]}>
          Biaya Pembayaran
        </Text>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-46.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.lineIcon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.frameChild8, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Text style={[styles.dataDiri1, styles.noHpTypo]}>Data Diri</Text>
        <Text style={[styles.namaAbigail, styles.noHpTypo]}>
          Nama : Abigail Jonggita
        </Text>
        <Text style={[styles.alamatKampung, styles.noHpTypo]}>
          Alamat : Kampung Baru
        </Text>
        <Text style={[styles.noHp, styles.noHpTypo]}>
          No. HP : 089784947389
        </Text>
        <Text style={[styles.emailAbigailgmailcom, styles.noHpTypo]}>
          Email : abigail@gmail.com
        </Text>
        <Text style={[styles.tglPesan, styles.noHpTypo]}>
          Tgl. Pesan : 19 Januari 2023
        </Text>
        <Text style={[styles.detailPemesanan, styles.noHpTypo]}>
          Detail Pemesanan
        </Text>
        <Text style={[styles.hotelAlila, styles.noHpTypo]}>
          Hotel : Alila Hotel Solo
        </Text>
        <Text style={[styles.tanggal20, styles.noHpTypo]}>
          Tanggal : 20 Jan - 22 Jan 2023
        </Text>
        <Text style={[styles.kamar1, styles.noHpTypo]}>
          Kamar : 1 King Room
        </Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-79.png")}
        />
        <Text style={[styles.bayar, styles.bayarTypo]}>BAYAR</Text>
      </View>
      <View style={[styles.bottom, styles.bottomLayout]}>
        <View style={[styles.bottomChild, styles.bottomLayout]} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Profil")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-33.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.framePosition]}
          onPress={() => navigation.navigate("Notifikasi")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-32.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-31.png")}
          />
        </Pressable>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("Produkdetail")}
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
  dataDiriLayout: {
    overflow: "hidden",
    height: 844,
  },
  checkoutPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_sm,
    left: 23,
    position: "absolute",
  },
  buktiPemesananTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  frameChildLayout: {
    height: 2,
    width: 390,
    left: 0,
    position: "absolute",
  },
  metodeTypo: {
    fontSize: FontSize.size_xs,
    width: 194,
  },
  frameItemPosition: {
    top: 475,
    position: "absolute",
  },
  bayarTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    position: "absolute",
  },
  rp1652500Typo: {
    color: Color.brown,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    position: "absolute",
  },
  rp1500000Typo: {
    top: 546,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  rp2500Typo: {
    top: 580,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  rp150000Typo: {
    top: 614,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  noHpTypo: {
    width: 341,
    fontSize: FontSize.size_2xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.inter,
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
  groupPosition: {
    height: 66,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  checkoutChild: {
    top: 116,
    width: 141,
    height: 119,
  },
  buktiPemesanan: {
    top: 28,
    left: 88,
    color: Color.teal,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  checkoutItem: {
    top: 255,
  },
  checkout: {
    backgroundColor: Color.gray_100,
    top: 0,
  },
  frameChild: {
    top: 469,
    width: 338,
    height: 33,
    backgroundColor: Color.gray_600,
  },
  pilihMetodePembayaran: {
    left: 179,
    color: Color.white,
    width: 194,
  },
  metodePembayaran: {
    top: 478,
    left: 31,
    width: 194,
  },
  rincianPembayaran: {
    top: 509,
    fontSize: FontSize.size_sm,
    color: Color.black,
    width: 194,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "600",
    left: 23,
    position: "absolute",
  },
  totalPembayaran: {
    top: 648,
    left: 31,
    width: 194,
  },
  rp1652500: {
    top: 645,
    width: 96,
    left: 249,
  },
  subtotalPembayaran: {
    left: 31,
    width: 194,
  },
  rp1500000: {
    width: 99,
    height: 34,
    left: 249,
  },
  rp2500: {
    left: 250,
    width: 76,
  },
  rp150000: {
    width: 90,
    left: 249,
  },
  biayaLayanan10: {
    left: 31,
    width: 194,
  },
  biayaPembayaran: {
    left: 31,
    width: 194,
  },
  frameItem: {
    left: 331,
    width: 17,
    height: 17,
  },
  frameInner: {
    top: 36,
  },
  lineIcon: {
    top: 78,
  },
  frameChild1: {
    top: 120,
  },
  frameChild2: {
    top: 162,
  },
  frameChild3: {
    top: 210,
  },
  frameChild4: {
    top: 256,
  },
  frameChild5: {
    top: 311,
  },
  frameChild6: {
    top: 351,
  },
  frameChild7: {
    top: 389,
  },
  frameChild8: {
    top: 426,
  },
  dataDiri1: {
    left: 13,
    top: 0,
  },
  namaAbigail: {
    top: 46,
    left: 31,
  },
  alamatKampung: {
    top: 89,
    left: 31,
  },
  noHp: {
    top: 131,
    left: 31,
  },
  emailAbigailgmailcom: {
    top: 177,
    left: 31,
  },
  tglPesan: {
    top: 223,
    left: 31,
  },
  detailPemesanan: {
    top: 272,
    left: 16,
  },
  hotelAlila: {
    top: 319,
    left: 31,
  },
  tanggal20: {
    top: 362,
    left: 31,
  },
  kamar1: {
    top: 398,
    left: 31,
  },
  rectangleIcon: {
    top: 686,
    left: 113,
    borderRadius: Border.br_lg,
    width: 138,
    height: 37,
    position: "absolute",
  },
  bayar: {
    top: 693,
    left: 148,
    fontSize: FontSize.size_3xl,
    color: Color.black,
  },
  rectangleParent: {
    top: 93,
    height: 686,
  },
  bottomChild: {
    backgroundColor: Color.gray_600,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 310,
    top: 8,
    width: 56,
    height: 43,
    position: "absolute",
  },
  container: {
    left: 168,
    width: 54,
  },
  frame: {
    width: 61,
    left: 16,
  },
  bottom: {
    top: 782,
  },
  groupChild: {
    backgroundColor: Color.gray_600,
  },
  rectanglePressable: {
    left: 20,
    top: 11,
    width: 36,
    height: 41,
    position: "absolute",
  },
  dataDiri: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
  },
});

export default DataDiri;
