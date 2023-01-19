import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Margin } from "../GlobalStyles";

const Browse = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.browse}
      locations={[0, 1]}
      colors={["#f8dcdc", "#94b4e4"]}
    >
      <View style={styles.browseChild} />
      <Image
        style={styles.browseItem}
        resizeMode="cover"
        source={require("../assets/rectangle-80.png")}
      />
      <Text
        style={[
          styles.soloSurakarta20Container,
          styles.soloSurakarta20ContainerFlexBox,
        ]}
      >
        <Text style={styles.soloSurakarta}>Solo (Surakarta)</Text>
        <Text style={styles.jan22}>20 Jan - 22 Jan, 2 tamu</Text>
      </Text>
      <View style={styles.browseInner} />
      <Pressable
        style={[styles.wrapper, styles.framePosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-31.png")}
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
        onPress={() => navigation.navigate("Notifikasi")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-33.png")}
        />
      </Pressable>
      <Pressable style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupLayout1]}>
          <View
            style={[
              styles.groupChild,
              styles.groupPosition,
              styles.groupLayout1,
            ]}
          />
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/rectangle-19.png")}
          />
          <Text
            style={[
              styles.hargaTermasukPembatalan,
              styles.hargaLayout,
              styles.hargaTypo1,
              styles.hargaPosition,
            ]}
          >
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text style={[styles.pesan, styles.pesanTypo, styles.pesanPosition]}>
            Swiss-Bel Hotel
          </Text>
          <Text
            style={[styles.rp857500, styles.rp857500Typo, styles.hargaLayout]}
          >
            Rp. 857.500
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View
            style={[
              styles.groupInner,
              styles.groupPosition,
              styles.groupLayout1,
            ]}
          />
          <Text style={[styles.rp450000, styles.rp450000Typo]}>
            Rp. 450.000
          </Text>
          <Image
            style={[styles.pesan1Layout, styles.groupChild5Position]}
            resizeMode="cover"
            source={require("../assets/rectangle-191.png")}
          />
          <Text
            style={[
              styles.hargaTermasukPembatalan1,
              styles.hargaLayout,
              styles.hargaTypo1,
            ]}
          >
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text
            style={[
              styles.pesan1,
              styles.pesan1Layout,
              styles.pesanTypo,
              styles.pesanPosition,
            ]}
          >
            The Sunan Solo Hotel
          </Text>
        </View>
        <Pressable
          style={[styles.rectangleContainer, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Produkdetail")}
        >
          <View
            style={[
              styles.rectangleView,
              styles.rectangleLayout,
              styles.groupPosition,
            ]}
          />
          <Image
            style={styles.groupChild1}
            resizeMode="cover"
            source={require("../assets/rectangle-192.png")}
          />
          <Text
            style={[
              styles.hargaTermasukPembatalan2,
              styles.hargaLayout,
              styles.hargaTypo1,
            ]}
          >
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <View style={[styles.frameView, styles.frameViewLayout]} />
          <Text style={[styles.pesan2, styles.pesanTypo]}>Alila Solo</Text>
        </Pressable>
        <View style={[styles.vectorParent, styles.groupChild2Layout]}>
          <Image
            style={[
              styles.groupChild2,
              styles.groupChild2Layout,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-17.png")}
          />
          <Image
            style={styles.groupChild3}
            resizeMode="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Text style={[styles.theRoyalHeritage, styles.soliaZignaTypo]}>
            The Royal Heritage
          </Text>
          <Text style={[styles.rp978000, styles.rp978000Typo]}>
            Rp. 978.000
          </Text>
          <Text
            style={[
              styles.hargaTermasukPembatalan3,
              styles.hargaTypo1,
              styles.hargaPosition,
              styles.soloSurakarta20ContainerFlexBox,
            ]}
          >
            Harga termasuk PEMBATALAN GRATIS
          </Text>
        </View>
        <View
          style={[styles.vectorGroup, styles.groupLayout, styles.vectorLayout]}
        >
          <Image
            style={[
              styles.groupChild4,
              styles.groupLayout,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-171.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChild5Position]}
            resizeMode="cover"
            source={require("../assets/rectangle-181.png")}
          />
          <Text
            style={[styles.rp750000, styles.pesan1Layout, styles.rp450000Typo]}
          >
            Rp. 750.000
          </Text>
          <Text style={[styles.hargaTermasukPembatalan4, styles.hargaTypo]}>
            Harga termasuk PEMBATALAN GRATIS
          </Text>
          <Text style={[styles.pesan3, styles.pesanTypo, styles.pesanPosition]}>
            Harris Hotel
          </Text>
        </View>
        <View
          style={[
            styles.vectorContainer,
            styles.groupChild6Layout,
            styles.vectorLayout,
          ]}
        >
          <Image
            style={[
              styles.groupChild6,
              styles.groupChild6Layout,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-172.png")}
          />
          <Image
            style={styles.groupChild7}
            resizeMode="cover"
            source={require("../assets/rectangle-182.png")}
          />
          <Text style={[styles.rp665000, styles.rp978000Typo]}>
            Rp. 665.000
          </Text>
          <Text style={[styles.soliaZigna, styles.soliaZignaTypo]}>
            Solia Zigna
          </Text>
          <Text style={[styles.hargaTermasukPembatalan5, styles.hargaTypo]}>
            Harga termasuk PEMBATALAN GRATIS
          </Text>
        </View>
        <Text
          style={[
            styles.rp1500000,
            styles.frameViewLayout,
            styles.rp857500Typo,
          ]}
        >
          Rp. 1.500.000
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  soloSurakarta20ContainerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  framePosition: {
    height: 43,
    top: 795,
    position: "absolute",
  },
  groupLayout1: {
    height: 309,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_md,
    top: 0,
    left: 0,
  },
  hargaLayout: {
    height: 34,
    textAlign: "left",
    position: "absolute",
  },
  hargaTypo1: {
    width: 179,
    color: Color.purple,
    fontFamily: FontFamily.iBMPlexSansCondensed,
    fontWeight: "300",
    fontSize: FontSize.size_base,
  },
  hargaPosition: {
    left: 61,
    width: 179,
    color: Color.purple,
    fontFamily: FontFamily.iBMPlexSansCondensed,
  },
  pesanTypo: {
    height: 20,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  pesanPosition: {
    top: 200,
    height: 20,
    left: 18,
  },
  rp857500Typo: {
    top: 246,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  rp450000Typo: {
    height: 40,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  groupChild5Position: {
    left: 25,
    height: 181,
    top: 12,
  },
  pesan1Layout: {
    width: 136,
    position: "absolute",
  },
  rectangleLayout: {
    height: 300,
    position: "absolute",
  },
  frameViewLayout: {
    height: 30,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 301,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_md,
    top: 0,
    left: 0,
  },
  soliaZignaTypo: {
    height: 32,
    width: 138,
    left: 12,
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rp978000Typo: {
    fontWeight: "700",
    fontFamily: FontFamily.iBMPlexSansCondensed,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout: {
    height: 307,
    position: "absolute",
  },
  vectorLayout: {
    width: 231,
    left: 411,
  },
  hargaTypo: {
    left: 52,
    height: 34,
    width: 179,
    color: Color.purple,
    fontFamily: FontFamily.iBMPlexSansCondensed,
    textAlign: "left",
    fontWeight: "300",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild6Layout: {
    height: 302,
    position: "absolute",
  },
  browseChild: {
    top: 45,
    left: 36,
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 318,
    height: 49,
    position: "absolute",
  },
  browseItem: {
    top: 55,
    left: 303,
    width: 32,
    height: 28,
    position: "absolute",
  },
  soloSurakarta: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  jan22: {
    margin: Margin.m_md,
  },
  soloSurakarta20Container: {
    top: 51,
    left: 53,
    fontFamily: FontFamily.inter,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  browseInner: {
    top: 789,
    backgroundColor: Color.gray_600,
    width: 390,
    height: 63,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 61,
    left: 16,
  },
  container: {
    left: 168,
    width: 54,
  },
  frame: {
    left: 310,
    width: 56,
  },
  groupChild: {
    width: 202,
  },
  groupItem: {
    left: 31,
    width: 144,
    height: 181,
    top: 12,
    position: "absolute",
  },
  hargaTermasukPembatalan: {
    top: 264,
  },
  pesan: {
    width: 113,
    left: 18,
    position: "absolute",
  },
  rp857500: {
    left: 109,
    width: 126,
  },
  rectangleParent: {
    left: -2,
    width: 240,
    top: 323,
  },
  groupInner: {
    width: 191,
  },
  rp450000: {
    top: 242,
    left: 95,
    width: 128,
    position: "absolute",
  },
  hargaTermasukPembatalan1: {
    top: 263,
    left: 56,
  },
  pesan1: {
    left: 18,
  },
  rectangleGroup: {
    left: 211,
    width: 235,
    top: 323,
  },
  rectangleView: {
    width: 198,
  },
  groupChild1: {
    top: 14,
    left: 20,
    width: 162,
    height: 180,
    position: "absolute",
  },
  hargaTermasukPembatalan2: {
    top: 253,
    left: 59,
  },
  frameView: {
    top: 223,
    left: 82,
    width: 100,
    overflow: "hidden",
  },
  pesan2: {
    top: 189,
    width: 75,
    left: 16,
    position: "absolute",
  },
  rectangleContainer: {
    top: 11,
    left: 2,
    width: 238,
  },
  groupChild2: {
    width: 196,
  },
  groupChild3: {
    width: 159,
    height: 178,
    left: 18,
    top: 12,
    position: "absolute",
  },
  theRoyalHeritage: {
    top: 190,
  },
  rp978000: {
    top: 236,
    left: 98,
    width: 85,
    height: 22,
  },
  hargaTermasukPembatalan3: {
    height: 17,
    top: 259,
  },
  vectorParent: {
    left: 206,
    top: 10,
    width: 240,
  },
  groupChild4: {
    width: 189,
  },
  groupChild5: {
    width: 141,
    position: "absolute",
  },
  rp750000: {
    top: 239,
    left: 94,
  },
  hargaTermasukPembatalan4: {
    top: 264,
  },
  pesan3: {
    width: 104,
    left: 18,
    position: "absolute",
  },
  vectorGroup: {
    top: 323,
  },
  groupChild6: {
    width: 188,
  },
  groupChild7: {
    top: 9,
    left: 17,
    width: 154,
    height: 185,
    position: "absolute",
  },
  rp665000: {
    top: 240,
    left: 99,
    width: 101,
    height: 28,
  },
  soliaZigna: {
    top: 195,
  },
  hargaTermasukPembatalan5: {
    top: 259,
  },
  vectorContainer: {
    top: 10,
  },
  rp1500000: {
    left: 73,
    textAlign: "center",
    width: 135,
  },
  groupParent: {
    top: 114,
    width: 360,
    height: 636,
    left: 16,
    position: "absolute",
  },
  browse: {
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Browse;
