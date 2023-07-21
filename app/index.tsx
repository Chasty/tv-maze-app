import React, { useEffect } from "react";
import Series from "@/components/Series";
import Searchbar from "@/components/Searchbar";
import { useSeries } from "@/hooks/useSeries";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native";
import { SerieProps } from "@/components/Serie";
import { View } from "@/components/Themed";

const HomeScreen = () => {
  const { search, onChangeText, series } = useSeries();

  return (
    <View style={{ flex: 1}}>
      <Searchbar
        placeholder="Search series"
        value={search}
        onChangeText={onChangeText}
      />
      <Series series={series} />
    </View>
  );
};

export default HomeScreen;
