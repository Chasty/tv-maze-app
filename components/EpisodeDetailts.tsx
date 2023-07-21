import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { EpisodeProps } from "./Episode";

const EpisodeDetailts = (episode: EpisodeProps) => {
  console.log(episode);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{episode.name}</Text>
      <Text>Episode {episode.number}</Text>
      <Text>Episode {episode.urlImage}</Text>
      <Image style={styles.image} source={{ uri: episode.urlImage }} />
    </View>
  );
};

export default EpisodeDetailts;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
