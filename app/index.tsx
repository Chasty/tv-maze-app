import { ScrollView } from "react-native";
import React from "react";
import Series from "@/components/Series";
import Searchbar from "@/components/Searchbar";
import { useSeries } from "@/hooks/useSeries";

const HomeScreen = () => {
  const { search, onChangeText, series } = useSeries();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
      <Searchbar
        placeholder="Search series"
        value={search}
        onChangeText={onChangeText}
      />
      <Series series={series} />
    </ScrollView>
  );
};

export default HomeScreen;
