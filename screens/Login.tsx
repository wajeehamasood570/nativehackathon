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

const Login = ({navigation}: any) => {
  const [model, setModel] = useState<any>({});
  const [checked, setChecked] = React.useState('first');

    const dispatch = useDispatch()

    const loginuser = async () => {
     await axios.post('http://192.168.2.107:8000/auth/login', model) 
      .then((res:any)=>{
        dispatch(add({
          ...res
        }))
        navigation.navigate('Home')
       })
    }
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

  //   const adduser = async () => {
  //     console.log(model);
  //     try{
  //       await axios.post('http://192.168.50.37:8000/auth/signup', model)
  //       // .then((res)=>{
  //       //   console.log(res.data)
  //       // })
  //       .then(res => {
  //         console.log(res.data);
  //         navigation.navigate('Login');
  //         dispatch(
  //           add({
  //             ...res,
  //           }),
  //         );
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     }
  //     catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  return (
    <View style={[styles.container, rncStyles.positionRelative]}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, name: e})}
          value={model.name}
          style={styles.inputText}
          placeholder="Name"
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

      

      

      <TouchableOpacity
       onPress={loginuser}
        style={[styles.loginBtn, rncStyles.positionAbsolute]}>
        <Text style={styles.btntitle}>Login</Text>
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
    bottom:20
  },
  btntitle: {
    color: 'white',
  },
  image: {
    width: 200,
    height:200,
  },
});
export default Login;
