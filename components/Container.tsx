import {  Text, StyleSheet, View as DefaultView } from 'react-native'
import React from 'react'
import { View } from './Themed'


type ContainerProps = {
  style: DefaultView['props']
  children: React.ReactNode 
}

const Container = (props: ContainerProps) => {
  const { style, children } = props;
  return (
    <View style={style}>
        {children}
    </View>
  )
}

export default Container