import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useSearchParams } from "expo-router";
import EpisodeDetailts from "@/components/EpisodeDetailts";

const EpisodeDetailsScrenn = () => {
  const params = useSearchParams();
  const episode = params?.data ? JSON.parse(params?.data) : null;
  return (
    <View>
      <Stack.Screen
        options={{
          title: `episode ${episode.number}`,
        }}
      />
      <EpisodeDetailts {...episode} />
    </View>
  );
};

export default EpisodeDetailsScrenn;

const styles = StyleSheet.create({});
