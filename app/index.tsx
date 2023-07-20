import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import Series from '@/components/Series'
import { SerieProps } from '@/components/Serie'
import Searchbar from '@/components/Searchbar'
import Services from '@/services'
import { Serie } from '@/models/Serie'
import { useDebounce } from '@/hooks'


const mapModelToProps = (series: Array<Serie>): Array<SerieProps> => {
  return series.map(serie => ({
    name: serie.show.name,
    genres: serie.show.genres,
    //schedule: serie.show.schedule,
    summary: serie.show.summary,
    urlImage: serie?.show.image?.original
  }))
}

export const mockSeries: Array<SerieProps> = [
  {
    name: 'Name',
    genres: ['Action', 'Fiction', 'Brave'],
    schedule: {
      time: '7:00 am',
      days: ["Monday", "Tuesday", "Saturday"]
    },
    summary: "Summary summary summary summary Sumammary mas mqwd qwkdkqwd qwdkqdw summary summary summary Sumammarysummary summary summary Sumammary summary summary summary Sumammary",
    urlImage: "https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"
  },
  {
    name: 'Name',
    genres: ['Action', 'Fiction', 'Brave'],
    schedule: {
      time: '7:00 am',
      days: ["Monday", "Tuesday", "Saturday"]
    },
    summary: "Summary summary summary summary Sumammary mas mqwd qwkdkqwd qwdkqdw summary summary summary Sumammarysummary summary summary Sumammary summary summary summary Sumammary",
    urlImage: "https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"
  },
  {
    name: 'Name',
    genres: ['Action', 'Fiction', 'Brave'],
    schedule: {
      time: '7:00 am',
      days: ["Monday", "Tuesday", "Saturday"]
    },
    summary: "Summary summary summary summary Sumammary mas mqwd qwkdkqwd qwdkqdw summary summary summary Sumammarysummary summary summary Sumammary summary summary summary Sumammary",
    urlImage: "https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"
  },
  {
    name: 'Name',
    genres: ['Action', 'Fiction', 'Brave'],
    schedule: {
      time: '7:00 am',
      days: ["Monday", "Tuesday", "Saturday"]
    },
    summary: "Summary summary summary summary Sumammary mas mqwd qwkdkqwd qwdkqdw summary summary summary Sumammarysummary summary summary Sumammary summary summary summary Sumammary",
    urlImage: "https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"
  }
]

const HomeScreen = () => {
  //const series = mockSeries.map((s) => ({ name: s.name, urlImage: s.urlImage }))
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedValue = useDebounce(searchTerm, 500)

  const handleChange = (text: string) => {
    setSearchTerm(text)
  }

  const [series, setSeries] = useState<Array<SerieProps>>([])

  const getSeries = async (search: string) => {
    const fetchedSeries = await Services.getSeries(search)
    console.log({fetchedSeries})
    const mappedSeries = mapModelToProps(fetchedSeries)
    setSeries(mappedSeries)
  }

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
   getSeries(debouncedValue)
  }, [debouncedValue])



  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
      <Searchbar placeholder='Search series' value={searchTerm} onChangeText={handleChange} />
      <Series series={series}  />
    </ScrollView>
  )
}

export default HomeScreen