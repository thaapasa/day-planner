import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Planner } from './Planner';
import { Schedule } from 'app/data/Schedule';
import { TaskImages } from './TaskImages';

export const DayScheduleView = ({
  schedule,
}: {
  schedule: Schedule | null;
}) => {
  return (
    <View style={styles.container}>
      {schedule ? (
        <>
          <View style={styles.absCenter}>
            <Planner size={280} thickness={16} schedule={schedule} />
          </View>
          <View style={styles.absCenter}>
            <TaskImages size={340} iconSize={46} schedule={schedule} />
          </View>
        </>
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
  absCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
