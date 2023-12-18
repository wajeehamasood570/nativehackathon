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
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}: any) => {
  const [model, setModel] = useState<any>({});
  const [checked, setChecked] = React.useState('first');

  const dispatch = useDispatch();

  const loginuser = async () => {
    console.log(model);
    await axios
      .post('http://192.168.1.106:8000/auth/login', model)
      .then((res: any) => {
        dispatch(
          add({
            ...res,
          }),
        );
        navigation.navigate('Home');
      });
  };
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

  const goback = () =>{
    navigation.goBack();
  }

  return (
    <View style={[styles.container, rncStyles.positionRelative]}>
      {/* <Image style={styles.image} source={require('../assets/logo.png')} /> */}
      <View style={[rncStyles.flexRow, rncStyles.justifyContentBetween]}>
        {/* <Icon name="chevron_left" size={50} color="black" /> */}
        {/* <Text style={[rncStyles.fs6, rncStyles.textBlack, rncStyles.py1]}>
          Back
        </Text> */}
        <TouchableOpacity onPress={goback}>
         <Image source={require('../assets/images/Backarrow.png')}/>
        </TouchableOpacity>
        <Text style={[styles.heading]}>Sign In</Text>
        <Text style={[styles.heading]}></Text>
      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.paragraph}>
        Please Enter your email address and password for Login
      </Text>

      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, Email: e})}
          value={model.Email}
          style={styles.inputText}
          placeholder="Enter your Email"
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          onChangeText={e => setModel({...model, Password: e})}
          value={model.password}
          style={styles.inputText}
          secureTextEntry
          placeholder="Enter your Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>

      <TouchableOpacity onPress={loginuser} style={[styles.loginBtn]}>
        <Text style={styles.btntitle}>Sign In</Text>
      </TouchableOpacity>

        <Text style={[rncStyles.fs6, rncStyles.textBlack,rncStyles.textCenter,rncStyles.textSecondary]}>Signin with</Text>
        <View style={[rncStyles.flexRow,rncStyles.justifyContentCenter,rncStyles.my2]}>
          <Image style={[rncStyles.mx1]} source={require('../assets/images/Apple.png')}/>
          <Image style={[rncStyles.mx1]} source={require('../assets/images/Google.png')}/>
         
        </View>
        <TouchableOpacity  onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text style={[rncStyles.fs6, rncStyles.textBlack,rncStyles.textCenter,rncStyles.textSecondary]}>Not register yet? <Text style={[rncStyles.textPrimary]}>Sign Up</Text></Text>
        </TouchableOpacity>
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
  heading: {
    fontFamily: 'Poppins',
    fontSize: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#002055',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 29,
    lineHeight: 43.5,
    color: 'black',
    marginVertical: 30,
  },
  paragraph: {
    fontSize: 16,
    color: '#868D95',
    marginBottom: 30,
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
    fontSize: 14,
    textAlign: 'right',
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
    width: 200,
    height: 200,
  },
});
export default Login;
