import { View, Text, Image as RNImage, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type PosterProps = {
  url?: string;
};

const Poster = ({ url }: PosterProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={url}
        placeholder={blurhash}
        contentFit="fill"
        transition={1000}
      />
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: "100%",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
