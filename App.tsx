import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Stacknavigation from './config/Stacknavigation';
import {Provider} from 'react-redux';
import store from './config/redux/store';
import {NavigationContainer} from '@react-navigation/native';


const App = () => { 
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer independent={true}>
            <Stacknavigation />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }

export default App;
