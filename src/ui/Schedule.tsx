import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Planner } from './Planner';
import { Schedule } from 'app/data/Schedule';

export const DayScheduleView = ({
  schedule,
}: {
  schedule: Schedule | null;
}) => {
  return (
    <View style={styles.container}>
      {schedule ? (
        <Planner size={320} schedule={schedule} />
      ) : (
        <Text>Lataillaan...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 320,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
