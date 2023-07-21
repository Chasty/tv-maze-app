import { StyleSheet } from "react-native";
import React from "react";
import { Serie, SerieProps } from "./Serie";
import { View } from "./Themed";

type SeriesProps = {
  series: Array<SerieProps>;
};

const Series = ({ series }: SeriesProps) => {
  return (
    <View style={styles.container}>
      {series.map((serie) => (
        <Serie key={serie.id} {...serie} />
      ))}
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
  },
});
