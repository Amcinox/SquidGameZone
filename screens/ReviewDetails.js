import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";
import { RotationGestureHandler } from "react-native-gesture-handler";
export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Card>
          <Text style={globalStyles.titleText}>
            {navigation.getParam("title")}
          </Text>

          <View style={styles.rating}>
            <Image source={images.ratings[rating]} />
          </View>

          <Image style={styles.poster} source={navigation.getParam("image")} />

          <Text style={globalStyles.paragraph}>
            {navigation.getParam("body")}
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  poster: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
});
