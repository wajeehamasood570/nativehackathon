import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import AddDocttor from '../screens/AddDocttor';
import AllDoctors from '../screens/AllDoctors';
import SliderScreen1 from '../screens/SliderScreen1';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function Stacknavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="StartScreen"
        component={StartScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Slider1"
        component={SliderScreen1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      
      {/* <Stack.Screen name="AddDoctor" component={AddDocttor} /> */}
      {/* <Stack.Screen name="AllDoctor" component={AllDoctors} /> */}
    </Stack.Navigator>
  );
}

export default Stacknavigation;
