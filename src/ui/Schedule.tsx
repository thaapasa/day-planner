import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'app/ui/Colors';

export const DayScheduleView = () => {
  return (
    <View style={styles.container}>
      <Text>Moi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    width: 320,
    height: 320,
  },
});
