import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#f44786",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#ed1b76",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flexWrap: "nowrap",
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
