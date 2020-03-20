import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Planner } from './Planner';
import { Schedule } from 'app/data/Schedule';
import { cmsClient } from 'app/data/CmsClient';

export const DayScheduleView = ({ schedule }: { schedule: Schedule }) => {
  React.useEffect(() => {
    cmsClient.getSchedule();
  }, []);
  return (
    <View style={styles.container}>
      <Planner size={320} schedule={schedule} />
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
