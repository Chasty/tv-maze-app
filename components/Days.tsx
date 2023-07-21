import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "./Themed";

type DaysProps = {
  schedule: {
    time: string;
    days: Array<string>;
  };
};

const Days = ({ schedule }: DaysProps) => {
  if (!schedule || schedule?.days.length === 0 || !schedule?.time)
    return <Text>No Schedule</Text>;

  const { time, days } = schedule;
  return (
    <View style={styles.container}>
      <Text style={styles.scheduleTex}>Schedule </Text>
      <Text>
        {" "}
        |
        {days.map((day, index) => (
          <Text style={{}} key={index}>
            {" " + day} |
          </Text>
        ))}
      </Text>
      <Text style={styles.timeText}> at {time}</Text>
    </View>
  );
};

export default Days;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scheduleTex: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timeText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
});
