import React from "react";
import { Stack, useSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SerieDetails } from "@/components/SerieDetails";
import {  useSeasons } from "@/hooks/useSeasons";

const DetailScreen = () => {
  const params = useSearchParams();
  const serie = params?.data ? JSON.parse(params?.data) : null;
  const { seasons }  = useSeasons(params?.id)

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: serie.name,
        }}
      />
      <SerieDetails {...serie} seasons={seasons} />
    </ScrollView>
  );
};

export default DetailScreen;
