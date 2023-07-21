import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width: WIDTH } = Dimensions.get("window")

const HALF_WIDTH = (WIDTH - 48) / 2

export type EpisodeProps = {
  id: number;
  name: string;
  season: number;
  number: number;
  score: number;
  urlImage?: string;
};

const Episode = ({name, urlImage}: EpisodeProps) => {
  return (
    <View style={styles.container}>
      <Text  style={styles.text} numberOfLines={1}>{name}</Text>
      <Image style={styles.image}  source={{ uri: urlImage}}  />
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "#555"
  },
  container: {
    width: HALF_WIDTH,
    height: 200,
    marginRight: 4,
    marginTop: 16,
  },
  text: {
    marginBottom: 4
  }
});
