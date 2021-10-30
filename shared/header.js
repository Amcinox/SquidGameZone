import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image style={styles.logo} source={require("../assets/square.png")} />
        <Text style={styles.headerText}>{title}</Text>
        <Image style={styles.logo} source={require("../assets/tiangle.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    flexDirection: "row",
  },
  logo: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
