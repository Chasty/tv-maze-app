import {  StyleSheet } from 'react-native'
import React from 'react'
import { MonoText } from './StyledText'

type SerieNameProps = {
    name: string
}

const SerieName = ({ name }: SerieNameProps) => {
    return (
        <MonoText style={styles.container}>
                {name}
        </MonoText>
    )
}

export default SerieName

const styles = StyleSheet.create({
    container: {
        marginTop: 8
    }
  })