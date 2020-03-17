import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainPage} from 'app/MainPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MainPage />
      </SafeAreaView>
    </>
  );
};

export default App;
