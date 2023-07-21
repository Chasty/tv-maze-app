import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Season, { SeasonProps } from "./Season";

type SeasonsProps = {
  seasons: Array<SeasonProps>;
};

const Seasons = ({ seasons }: SeasonsProps) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>Seasons</Text>
      {seasons.map((season) => (
        <Season key={season.season} {...season} />
      ))}
    </View>
  );
};

export default Seasons;

const styles = StyleSheet.create({});
