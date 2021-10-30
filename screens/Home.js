import React, { useState } from "react";
import Card from "../shared/Card";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Marbles",
      rating: 5,
      body: "But it was the game between Gi-hun and Il-nam that made it all too much. Gi-hun tried to get Il-nam to play with him, but the elderly man was losing his mind and memories. Gi-hun eventually resorted to fooling the old man before Il-nam let on that he knew the whole time and let Gi-hun win. A tense game, for sure, but ultimately an emotionally devastating one.",
      key: "1",
      image: require("../assets/images/marbles.png"),
    },
    {
      title: "The Glass Stepping Stones",
      rating: 3,
      body: "Before this game even started, it was tense — players had to decide which running order to go in and Gi-hun was left stranded trying to work out whether to pick to go first or last. It was a true conundrum that put viewers through the decision-making process as much as Gi-hun. \n Then, the game started — players had to make their way over a bridge made of glass stepping stones. Half of the glass breaks while half remains intact when players step on it. \n  With each player and each glass stepping stone, the suspense racked up and up and up as they tried to decide which panel to step on. The wrong choice would see the glass smash and the player fall to the ground beneath them. Every time a player leapt onto one of the panels, viewers held their breath to see their fate. \n The demise of both Deok-su and Mi-nyeo added to the drama of the event, while the time limit meant that the last three players — Gi-hun, Sang-woo, and Sae-byeok — had to hope that everyone else in front of them made their minds up quick.",
      key: "2",
      image: require("../assets/images/glass_stepping.png"),
    },
    {
      title: "Dalgona Candy",
      rating: 3,
      body: "Less action, but more tension. From the moment we and Gi-hun realized what the game was, we knew it was going to be a suspense-filled game as players tried to carefully prize a shape from honeycomb cookie without breaking it. \n Watching players timidly jab away at the cookies with just a needle was torture, particularly poor old Gi-hun, who was stuck with the most difficult shape to execute — an umbrella. \n Some desperate players tragically snapped segments of their cookie shapes and that was it — they were out (dead). Mi-nyeo and Gi-hun use their intelligence to get their way out of the game as the former uses a lighter to heat a needle and the latter melts the cookie away by repeatedly licking out. \n When Gi-hun does this, it sparks a furious frenzy of other players frantically licking away at their honeycomb to prize their shape out. The game was made all the tense by the fact that it ended with a player, who lost, taking hostage of a guard.",
      key: "3",
      image: require("../assets/images/dalgona_candy.png"),
    },
    {
      title: "The Midnight Fight",
      rating: 3,
      body: "While this isn't technically  part of the competition's program of games, it still kind of is. Considered an extra game of sorts, this fight took place at night in the dorm room where the players sleep. \n Once night came, the lights switched off and an all-out war took place between the players, some of whom had many alliances. Bloody, brutal, mayhem. \n It was nerve-shredding seeing who was going to make it through the fight, particularly as Deok-su tried his best to murder fan-favourite Sae-byeok. \n What made it even more stressful, though, was the fact that the entire thing was played out with the most extreme flashing strobe lights we've ever seen. ",
      key: "4",
      image: require("../assets/images/midnight_fight.png"),
    },
    {
      title: "Tug of War",
      rating: 4,
      body: " Viewers felt the dread of this game of tug of war as much as Gi-hun's team did when they saw who they were facing — a team of pretty strong-looking men. \n What follows, however, is a bit of sheer genius. Il-nam coaches his team through the smartest way to play tug of war, and it works for a while before the other team make a breakthrough and Gi-hun gets pulled right off the edge of the platform. \n It looks like all is lost until Sang-woo comes up with another stroke of genius, and the victory is finally declared theirs. It's a stressful game for sure, but this was one of the more enjoyable games thanks to the wits and tactics on display from Il-nam and Gi-hun.",
      key: "5",
      image: require("../assets/images/tug_of_war.png"),
    },
    {
      title: "Squid Game",
      rating: 3,
      body: "The final game in the show is a brutal face-off between Gi-hun and Sang-woo in which they play the titular children's game, Squid Game. \n It's a fierce and bloody battle between the two former friends with both taking the upper hand at certain points. It's a great climax to a wonderful show, but there have been more stressful moments in the  Netflix series.",
      key: "6",
      image: require("../assets/images/squid_game.png"),
    },
    {
      title: "Red Light, Green Light",
      rating: 4,
      body: "This one is the most iconic game in 'Squid Game' thanks to the fact that it's the first game to be played and the sheer terrifying image of that giant doll. \n However, since it is the first game to be played, we know that there will be more to come later in the series. This doesn't make an easy ride, though: it's genuinely scary watching players get picked off due to the slightest of arm twitches. \n Meanwhile, the first realization that players die when they lose results in an absolute massacre of almost half the players. Plus, Abdul's save of Gi-hun is tense and heroic.",
      key: "7",
      image: require("../assets/images/red_light_green.png"),
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
