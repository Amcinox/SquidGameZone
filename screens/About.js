import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/global";
export default function About() {
  return (
    <View style={globalStyles.container}>
      <SafeAreaView>
        <Text style={globalStyles.titleText}>
          Hundreds of cash-strapped players accept a strange invitation to
          compete in children's games. Inside, a tempting prize awaits with
          deadly high stakes. A survival game that has a whopping 45.6
          billion-won prize at stake.
        </Text>
      </SafeAreaView>
    </View>
  );
}
