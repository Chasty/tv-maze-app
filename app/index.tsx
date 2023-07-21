import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import Series from "@/components/Series";
import { SerieProps } from "@/components/Serie";
import Searchbar from "@/components/Searchbar";
import Services from "@/services";
import { Serie } from "@/models/Serie";
import { useDebounce } from "@/hooks";

const mapSerieModelToProps = (series: Array<Serie>): Array<SerieProps> => {
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

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);

  const handleChange = (text: string) => {
    setSearchTerm(text);
  };

  const [series, setSeries] = useState<Array<SerieProps>>([]);

  const getSeries = async (search: string) => {
    const fetchedSeries = await Services.getSeries(search);
    const mappedSeries = mapSerieModelToProps(fetchedSeries);
    setSeries(mappedSeries);
  };

  useEffect(() => {
    getSeries(debouncedValue);
  }, [debouncedValue]);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
      <Searchbar
        placeholder="Search series"
        value={searchTerm}
        onChangeText={handleChange}
      />
      <Series series={series} />
    </ScrollView>
  );
};

export default HomeScreen;
