import { StyleSheet, Text } from "react-native";
import React from "react";
import { View } from "./Themed";
import Episode, { EpisodeProps } from "./Episode";

export type SeasonProps = {
  season: number;
  episodes: Array<EpisodeProps>;
};

const Season = ({ season, episodes }: SeasonProps) => {
  return (
    <View style={styles.container}>
      <Text>Season {season}</Text>
      {episodes.map((episode) => (
        <Episode key={episode.id} {...episode} />
      ))}
    </View>
  );
};

export default Season;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
