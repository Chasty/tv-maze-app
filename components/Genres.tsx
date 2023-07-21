import { StyleSheet } from "react-native";
import React from "react";
//import Container from './Container'
import Genre from "./Genre";
import { View } from "./Themed";

type GenresProps = {
  genres: Array<string>;
};

const Genres = ({ genres }: GenresProps) => {
  if (!genres) return null;
  return (
    <View style={styles.container}>
      {genres.map((genre, index) => (
        <Genre key={index} genre={genre} />
      ))}
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 8,
  },
});
