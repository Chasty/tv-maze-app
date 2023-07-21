import { Episode } from "@/models/Episode";
import { Serie } from "@/models/Serie";

const BASE_URL = "https://api.tvmaze.com";

const fetchShows = (search: string) => {
  return new Promise<Array<Serie>>((resolve, reject) => {
    fetch(`${BASE_URL}/search/shows?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(new Error("An error ocurred"));
      });
  });
};

const fetchEpisodes = (serieId: number) => {
  return new Promise<Array<Episode>>((resolve, reject) => {
    fetch(`${BASE_URL}/shows/${serieId}/episodes`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(new Error("An error ocurred"));
      });
  });
};

const getSeries = async (search: string) => {
  const shows = await fetchShows(search);
  return shows;
};

const getEpisodes = async (serieId: number) => {
  const episodes = await fetchEpisodes(serieId);
  return episodes;
};

export default {
  getSeries,
  getEpisodes,
};
