import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { ComponentProps } from 'react'



const Searchbar = (props: ComponentProps<typeof TextInput>) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 4
    },
    input: {
        backgroundColor: '#fff',
        height: 54,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 24
    }
})