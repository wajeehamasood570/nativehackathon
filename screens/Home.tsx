import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import rncStyles from 'rncstyles';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddTask from './AddTask';
import Showtask from './Showtask';
import Taskhome from './Taskhome';
import Comment from './Comment';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const Home = () => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const Tab = createBottomTabNavigator();

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false, tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="TaskHome"
        component={Taskhome}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Icon name="folder" color={color} size={size} />
          ),}}
        name="Showtask"
        component={Showtask}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarLabel: 'Add',
        tabBarIcon: ({ color, size }) => (
          <Icon name="add" color={color} size={size} />
        ),}}
        name="Addtask"
        component={AddTask}
      />
      <Tab.Screen
        options={{headerShown: false,tabBarLabel: 'comments',
        tabBarIcon: ({ color, size }) => (
          <Icon name="sms" color={color} size={size} />
        ),}}
        name="Comment"
        component={Comment}
      />
      <Tab.Screen
        options={{headerShown: false, tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color={color} size={size} />
        ),}}
        name="Profile"
        component={Profile}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 29,
    lineHeight: 43.5,
    color: 'black',
    marginVertical: 30,
    marginRight: 30,
  },
  inputView: {
    width: '100%',
    backgroundColor: '#EDF8FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A86FF24',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotAndSignUpText: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#756EF3',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 0,
    color: 'white',
    bottom: 20,
    fontSize: 16,
  },
  btntitle: {
    color: 'white',
  },
  image: {
    width: 186,
    height: 186,
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 25,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#002055',
    marginRight: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#868D95',
    marginBottom: 30,
  },
});

export default Home;
