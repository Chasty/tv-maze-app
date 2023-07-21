import { Episode } from "./Episode";

export type Serie = {
  score: number;
  show: {
    id: string;
    name: string;
    summary: string;
    schedule: {
      time: string;
      days: Array<string>;
    };
    genres: Array<string>;
    image: {
      original: string;
    };
    episodes: Array<Episode>;
  };
};
