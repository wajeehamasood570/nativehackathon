import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import rncStyles from 'rncstyles';
import {RadioButton} from 'react-native-paper';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions, 
} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {add} from '../config/redux/reducers/loginslice';
// import {signUp} from '../FirebaseMethods';
// import {Post} from '../apimethods/Apimethods';
import axios from 'axios';
// import { Post } from '../apimethods/Apimethods';

const SignUp = ({navigation}: any) => {
  const [model, setModel] = useState<any>({});
  const [checked, setChecked] = React.useState('first');

    const dispatch = useDispatch();

  // const adduser = () => {
  //   signUp(model)
  //     .then((res: any) => {
  //       navigation.navigate('Login');
  //       dispatch(
  //         add({
  //           ...res
  //         })
  //         )
  //       })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

    // const adduser =  () => {
    //   console.log(model);
    //   // try{
    //     axios.post('http://192.168.2.107:8000/auth/signup', model)
    //     .then(res => {
    //       console.log(res.data);
    //       navigation.navigate('Login');
    //       dispatch(
    //         add({
    //           ...res,
    //         }),
    //       );
    //     })
    //     // .catch(err => {
    //     //   console.log(err);
    //     // });
    //   // }
    //   // catch (error) {
    //   //   console.error('Error fetching data:', error);
    //   // }
    // };

    const adduser = async() =>{
    try {
      await axios.post('http://192.168.2.107:8000/auth/signup', model)
      .then((res:any)=>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
    
          // Assuming you want to dispatch the response data
          dispatch(
            add({
              ...res,
            })
          );
      }).catch((err:any)=>{
            console.log(err)
      })
     
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={styles.title}>Registration</Text>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, name: e})}
          value={model.name}
          style={styles.inputText}
          accessibilityLabel="Name"
          placeholder="Name"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, email: e})}
          value={model.email}
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, password: e})}
          value={model.password}
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>

      {/* <View style={[rncStyles.alignItemsStart, rncStyles.flexRow, rncStyles.textStart]}>
        <View style={[rncStyles.flexRow, rncStyles.px2]}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={(e) => {setChecked('first'); setModel({...model, userType:'Doctor'})}}
          />
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Doctor</Text>
        </View>

        <View style={[rncStyles.flexRow, rncStyles.px2]}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={(e) => {setChecked('second'); setModel({...model, userType:'Patient'})}}
          />
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Patient</Text>
        </View>
      </View> */}

      <TouchableOpacity style={styles.loginBtn} onPress={adduser}>
        <Text style={styles.btntitle} >SIGN UP </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.loginBtn}>
        <Text style={styles.btntitle}>Already user ? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 29,
    lineHeight: 43.5,
    color: 'black',
    marginBottom: 40,
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
    width: '80%',
    backgroundColor: '#B28CFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 0,
    color: 'white',
  },
  btntitle: {
    color: 'white',
  },
  image: {
    width: 186,
    height: 186,
  },
});
export default SignUp;
