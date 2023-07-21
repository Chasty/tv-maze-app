import {  StyleSheet } from 'react-native'
import React from 'react'
import { Text } from './Themed'

type SerieNameProps = {
    name: string
}

const SerieName = ({ name }: SerieNameProps) => {
    return (
        <Text style={styles.container}>
                {name}
        </Text>
    )
}

export default SerieName

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        fontWeight: '900',
        fontSize: 18,
        letterSpacing: 4
    }
  })