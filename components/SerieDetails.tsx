import Days from "./Days";
import Genres from "./Genres";
import Poster from "./Poster";
import SerieName from "./SerieName";
import Summary from "./Summary";
import Seasons from "./Seasons";
import { SeasonProps } from "./Season";
import { View } from "./Themed";

export type SerieProps = {
  id: string;
  urlImage?: string;
  name: string;
  summary: string;
  schedule: {
    time: string;
    days: Array<string>;
  };
  genres: Array<string>;
  seasons: Array<SeasonProps>;
};

export const SerieDetails = (props: SerieProps) => {
  const {
    id,
    name,
    summary,
    urlImage,
    schedule,
    genres,
    seasons,
  } = props;
  return (
    <View>
      <Poster url={urlImage} />
      <View style={{ marginHorizontal: 20 }}>
        <SerieName name={name} />
        <Summary text={summary} />
        <Days schedule={schedule} />
        <Genres genres={genres} />
        <Seasons seasons={seasons} />
      </View>
    </View>
  );
};
