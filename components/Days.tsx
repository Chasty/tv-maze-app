import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'

type DaysProps = {
    schedule: {
        time: string
        days: Array<string>
    }
}

const Days = ({ schedule }: DaysProps) => {
    const { time, days } = schedule
    return (
        <View>
            <Text>{time}</Text>
            {days.map((day, index) => (
                <Text key={index}>{day}</Text>
            ))}
        </View>
    )
}

export default Days

const styles = StyleSheet.create({})