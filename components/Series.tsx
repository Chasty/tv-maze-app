import { StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { Serie, SerieProps } from "./Serie";
import { Text, View } from "./Themed";

type SeriesProps = {
  series: Array<SerieProps>;
};

const Series = ({ series }: SeriesProps) => {
  const renderItem = ({ item }: { item: SerieProps }) => {
    return <Serie {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        data={series}
        renderItem={renderItem}
        keyExtractor={(prop, index) => `${prop.id}-${index}`}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image
              style={styles.emptyImage}
              source={require("../assets/images/no-images-found.jpg")}
            />
            <Text style={styles.text}>No series found</Text>
            <Text style={styles.text}>
              Try to search a serie by another name.
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyImage: {
    width: 300,
    height: 300,
  },
  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    marginTop: 8,
  },
});
