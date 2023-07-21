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
      <Text style={styles.text}>Season {season}</Text>
      <View style={styles.separator}></View>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row'}}>
        {episodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </View>
    </View>
  );
};

export default Season;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#444',
    marginTop: 4,
    marginBottom: 8
  }
});
