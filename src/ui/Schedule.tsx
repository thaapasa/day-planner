import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Planner} from './Planner';

export const DayScheduleView = () => {
  return (
    <View style={styles.container}>
      <Planner size={320} />
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
