import { Pressable } from "react-native";
import Poster from "./Poster";
import SerieName from "./SerieName";
import { useRouter } from "expo-router";
import { SeasonProps } from "./Season";
import { htmlEntities } from "@/utils";

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
  const { id, name, urlImage } = props;
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(`/${id}`);
        router.setParams({
          data: JSON.stringify({
            ...props,
            summary: htmlEntities(props.summary),
          }),
        });
      }}
      style={{ margin: 20 }}
    >
      <Poster url={urlImage} />
      <SerieName name={name} />
    </Pressable>
  );
};
