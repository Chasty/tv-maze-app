import { StyleSheet, Text, View } from "react-native";
import React from "react";

export type EpisodeProps = {
  id: number;
  name: string;
  season: number;
  number: number;
  score: number;
  urlImage?: string;
};

const Episode = (props: EpisodeProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default Episode;

const styles = StyleSheet.create({});
