import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'app/ui/Colors';
import { DayScheduleView } from './ui/Schedule';
import { Schedule } from './data/Schedule';
import { cmsClient } from './data/CmsClient';

export const MainPage = () => {
  const [schedule, setSchedule] = React.useState<Schedule | null>(null);
  React.useEffect(() => {
    cmsClient.getSchedule().then(s => setSchedule(s ?? null));
  }, []);
  return (
    <View style={styles.mainPage}>
      <DayScheduleView schedule={schedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: Colors.white,
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
