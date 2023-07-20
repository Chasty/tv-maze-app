import { Serie } from '@/components/Serie'
import { View } from '@/components/Themed'
import React from 'react'
import { mockSeries } from '.'

const serie = {
  name: 'Name',
  genres: ['Action', 'Fiction', 'Brave'],
  schedule: {
    time: '7:00 am',
    days: ["Monday", "Tuesday", "Saturday"]
  },
  summary: "Summary summary summary summary Sumammary mas mqwd qwkdkqwd qwdkqdw summary summary summary Sumammarysummary summary summary Sumammary summary summary summary Sumammary",
  urlImage: "https://static.tvmaze.com/uploads/images/original_untouched/191/478539.jpg"
}

const DetailScreen = () => {
  return (
    <View>
        <Serie {...serie}  />
    </View>
  )
}

export default DetailScreen