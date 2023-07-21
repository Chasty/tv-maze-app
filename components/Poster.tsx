import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type PosterProps = {
  url?: string;
};

const Poster = ({ url }: PosterProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          url ? { uri: url } : require("../assets/images/no-image-available.png")
        }
      />
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%'
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
});
