import {
  Dimensions,
  Image as RNImage,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { Image } from "expo-image";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width: WIDTH } = Dimensions.get("window");

const HALF_WIDTH = (WIDTH - 52) / 2;

export type EpisodeProps = {
  id: number;
  name: string;
  season: number;
  number: number;
  score: number;
  summary: string;
  urlImage?: string;
};

const Episode = (episode: EpisodeProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        router.push(`/episode-details`);
        router.setParams({ data: JSON.stringify(episode) });
      }}
    >
      <Text style={styles.text} numberOfLines={1}>
        {episode.name}
      </Text>
      <Image
        style={styles.image}
        source={episode.urlImage}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </Pressable>
  );
};

export default Episode;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "#555",
  },
  container: {
    width: HALF_WIDTH,
    height: 200,
    marginRight: 6,
    marginTop: 16,
  },
  text: {
    marginBottom: 4,
  },
});
