import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'app/ui/Colors';
import {DayScheduleView} from './ui/Schedule';

export const MainPage = () => {
  return (
    <View style={styles.mainPage}>
      <DayScheduleView />
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
