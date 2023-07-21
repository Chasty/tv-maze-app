import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { Serie, SerieProps } from "./Serie";
import { View } from "./Themed";

type SeriesProps = {
  series: Array<SerieProps>;
};

const Series = ({ series }: SeriesProps) => {

  const renderItem = ({ item }: { item : SerieProps }) => {
    return <Serie {...item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        data={series}
        renderItem={renderItem}
        keyExtractor={(prop) => prop.id}
      />
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
