import { useEffect, useState } from "react";
import API from "@/services";
import { groupEpisodesBySeason } from "@/utils";
import { SeasonProps } from "@/components/Season";

export const useSeasons = (serieId: number) => {
  const [seasons, setSeasons] = useState<Array<SeasonProps>>([]);

  const getEpisodes = async () => {
    const episodes = await API.getEpisodes(serieId);
    const seasons = groupEpisodesBySeason(episodes);
    setSeasons(seasons);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return {
    seasons,
  };
};
