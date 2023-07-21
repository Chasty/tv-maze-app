import { Pressable } from "react-native";
import Days from "./Days";
import Genres from "./Genres";
import Poster from "./Poster";
import SerieName from "./SerieName";
import Summary from "./Summary";
import { useRouter } from "expo-router";
import Seasons from "./Seasons";
import { SeasonProps } from "./Season";

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
  withDetails?: boolean;
  seasons: Array<SeasonProps>;
};

export const Serie = (props: SerieProps) => {
  const {
    id,
    name,
    summary,
    urlImage,
    schedule,
    genres,
    seasons,
    withDetails,
  } = props;
  const router = useRouter();
  return (
    <Pressable
      disabled={withDetails}
      onPress={() => {
        router.push(`/${id}`);
        router.setParams({ data: JSON.stringify(props) });
      }}
      style={{ margin: 20 }}
    >
      <Poster url={urlImage} />
      <SerieName name={name} />
      {withDetails && <Summary text={summary} />}
      {withDetails && <Days schedule={schedule} />}
      {withDetails && <Genres genres={genres} />}
      {withDetails && <Seasons seasons={seasons} />}
    </Pressable>
  );
};
