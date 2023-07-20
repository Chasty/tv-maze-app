import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


type PosterProps = {
    url?: string
}

const Poster = ({ url }: PosterProps) => {
  if(!url) return null  
  return (
    <Image style={styles.image} source={{ uri: url}}  />
  )
}

export default Poster

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    }
})