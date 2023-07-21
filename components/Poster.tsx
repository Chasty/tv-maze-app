import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type PosterProps = {
  url?: string;
};

const Poster = ({ url }: PosterProps) => {
  return (
    <Image
      style={styles.image}
      source={
        url ? { uri: url } : require("../assets/images/no-image-available.png")
      }
    />
  );
};

export default Poster;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
