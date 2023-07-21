import { EpisodeProps } from "@/components/Episode";
import { SeasonProps } from "@/components/Season";
import { SerieProps } from "@/components/Serie";
import { Episode } from "@/models/Episode";
import { Serie } from "@/models/Serie";

export const mapSerieModelToProps = (series: Array<Serie>): Array<SerieProps> => {
    return series.map((serie) => ({
        id: serie.show.id,
        name: serie.show.name,
        genres: serie.show.genres,
        schedule: serie.show.schedule,
        summary: serie.show.summary,
        urlImage: serie?.show.image?.original,
        seasons: [],
    }));
};

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

export const groupEpisodesBySeason = (
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