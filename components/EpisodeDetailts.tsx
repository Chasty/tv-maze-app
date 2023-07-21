import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { EpisodeProps } from "./Episode";
import Summary from "./Summary";
import { Image } from "expo-image";

const EpisodeDetailts = (episode: EpisodeProps) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{episode.name}</Text>
      <Text>
        Season {episode.season} - Episode {episode.number}
      </Text>
      <Image
        placeholder={blurhash}
        style={styles.image}
        source={{ uri: episode.urlImage }}
      />
      <Summary text={episode.summary} />
    </View>
  );
};

export default EpisodeDetailts;

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    backgroundColor: "red",
  },
});
