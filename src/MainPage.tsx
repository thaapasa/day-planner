import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'app/ui/Colors';

export const MainPage = () => {
  return (
    <View style={styles.mainPage}>
      <Text>Moi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: Colors.white,
  },
});
