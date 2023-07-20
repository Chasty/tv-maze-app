import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import Colors from '@/constants/Colors'

type GenreProps = {
    genre: string
}

const Genre = ({ genre }: GenreProps) => {
  return (
    <View style={styles.container}>
        <Text style={{ color: 'white'}}>
            {genre}
        </Text>
    </View>
  )
}

export default Genre

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        paddingVertical: 12,
        backgroundColor: Colors.dark.background,
        borderRadius: 20,
        marginRight: 8
    }
})