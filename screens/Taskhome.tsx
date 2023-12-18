import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import rncStyles from 'rncstyles';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddTask from './AddTask';
import Showtask from './Showtask';
import {useSelector} from 'react-redux';

const Taskhome = () => {
  const user = useSelector((a: any) => a.login);
  console.log(user);

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <View style={[styles.container, rncStyles.positionRelative]}>
      {/* <Image style={styles.image} source={require('../assets/logo.png')} /> */}
      <View style={[rncStyles.flexRow, rncStyles.justifyContentBetween]}>
        {/* <Text style={[rncStyles.fs6, rncStyles.textBlack, rncStyles.py1]}>
        Back
      </Text> */}
        <TouchableOpacity>
          <Icon name="category" size={25} color="#002055" />
          {/* <Image source={require('../assets/images/Backarrow.png')}/> */}
        </TouchableOpacity>
        <Text style={[styles.heading]}>{currentDate}</Text>
        <Icon name="notifications" size={25} color="#002055" />
      </View>

      <View >
        {user.auth ? (
          <>
            <Text style={[rncStyles.textBlack,styles.title]}>
              Welcome {user.loginData.data.data.user.Name}
            </Text>
          </>
        ) : (
          <>
            <Icon name="home" size={100} color="black" />
          </>
        )}
      </View>
      <Text style={styles.title}>Let’s make a habits together 🙌</Text>
      <Text style={styles.paragraph}>
        Please Enter your email address and password for Login
      </Text>
    </View>
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
    marginTop: 30,
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

export default Taskhome;
