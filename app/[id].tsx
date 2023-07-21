import { SeasonProps, Serie, SerieProps } from "@/components/Serie";
import { View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import Services from "@/services";
import { Episode } from "@/models/Episode";
import { EpisodeProps } from "@/components/Episode";
import { ScrollView } from "react-native-gesture-handler";

const mapModelEpisodeToProps = (
  episodes: Array<Episode>
): Array<EpisodeProps> => {
  return episodes.map((episode) => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    urlImage: episode?.image?.original,
    score: episode.score,
    number: episode.number,
  }));
};

const groupEpisodesBySeason = (
  episodes: Array<Episode>
): Array<SeasonProps> => {
  const initialValue: Record<number, Array<Episode>> = {};

  const groupedEpisodesBySeason = episodes.reduce((acc, episode) => {
    if (episode.season in acc) {
      acc[episode.season].push(episode);
    } else {
      acc[episode.season] = [episode];
    }
    return acc;
  }, initialValue);

  const result = Object.entries(groupedEpisodesBySeason).map((key) => {
    return {
      season: parseInt(key[0]),
      episodes: mapModelEpisodeToProps(key[1]),
    };
  });

  return result;
};

const DetailScreen = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [seasons, setSeasons] = useState<Array<SeasonProps>>([]);
  const serie = params?.data ? JSON.parse(params?.data) : null;

  const getEpisodes = async () => {
    const episodes = await Services.getEpisodes(params?.id);
    const seasons = groupEpisodesBySeason(episodes);
    setSeasons(seasons);
  };

  useEffect(() => {
    //router.setParams({ id: "Updated" });
    //getEpisodes();
    getEpisodes();
  }, [params?.id]);

  //const { id } = useSearchParams();
  //console.log(params);
  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: serie.name,
        }}
      />
      {<Serie {...serie} seasons={seasons} withDetails />}
    </ScrollView>
  );
};

export default DetailScreen;
