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

// import {signUp} from '../FirebaseMethods';
// import {Post} from '../apimethods/Apimethods';
import axios from 'axios';
import {add} from '../config/redux/reducers/loginslice';
import DatePicker from 'react-native-date-picker';
// import { Post } from '../apimethods/Apimethods';

const AddTask = ({navigation}: any) => {
  const [model, setModel] = useState<any>({});
  const [checked, setChecked] = React.useState('first');
  const [date, setDate] = useState(new Date())

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

  const goback = () => {
    navigation.goBack();
  };

  const addtask = async ({navigation}:any) => {
    console.log(model);
    try {
      await axios
        .post('http://192.168.1.106:8000/task', model)
        .then((res: any) => {
          console.log(res.data)
          goback();
          // Assuming you want to dispatch the response data
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.container, rncStyles.positionRelative]}>
        {/* <Image style={styles.image} source={require('../assets/logo.png')} /> */}
        <View style={[rncStyles.flexRow, rncStyles.justifyContentBetween]}>
          {/* <Icon name="chevron_left" size={50} color="black" /> */}
          {/* <Text style={[rncStyles.fs6, rncStyles.textBlack, rncStyles.py1]}>
        Back
      </Text> */}
          <TouchableOpacity onPress={goback}>
            <Image source={require('../assets/images/Backarrow.png')} />
          </TouchableOpacity>
          <Text style={[styles.heading]}>Add Task</Text>
          <Text style={[styles.heading]}></Text>
        </View>

        {/* //add task */}
        <View style={[rncStyles.my5]}>
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Task Name</Text>
          <View style={[styles.inputView]}>
            <TextInput
              onChangeText={e => setModel({...model, TaskName: e})}
              value={model.TaskName}
              style={styles.inputText}
              accessibilityLabel="TaskName"
              placeholder="eg. Mobile Application Design"
              placeholderTextColor="#003f5c"
            />
          </View>

          {/* <Text style={[rncStyles.textBlack, rncStyles.my1]}>Date</Text> */}
          {/* <View style={styles.inputView}> */}
          {/* <DatePicker style={[rncStyles.textBlack]} mode="datetime" date={date} onDateChange={setDate} /> */}
            {/* <TextInput
              onChangeText={e => setModel({...model, Date: e})}
              value={model.Date}
              style={styles.inputText}
              placeholder="Date"
              placeholderTextColor="#003f5c"
            /> */}
          {/* </View> */}

          <View style={[rncStyles.flexRow]}>
            <View style={[rncStyles.mx1]}>
              <Text style={[rncStyles.textBlack, rncStyles.my1]}>
                Start Time{' '}
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  onChangeText={e => setModel({...model, StartTime: e})}
                  value={model.StartTime}
                  style={styles.inputText}
                  secureTextEntry
                  placeholder="Start Time"
                  placeholderTextColor="#003f5c"
                  keyboardType='numeric'
                />
              </View>
            </View>

            <View>
              <Text style={[rncStyles.textBlack, rncStyles.my1]}>
                End Time{' '}
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  onChangeText={e => setModel({...model, EndTime: e})}
                  value={model.EndTime}
                  style={styles.inputText}
                  secureTextEntry
                  placeholder="End Time"
                  placeholderTextColor="#003f5c"
                  keyboardType='numeric'
                />
              </View>
            </View>
          </View>
          {/* <View>
            <Text style={[rncStyles.textBlack, rncStyles.my1]}>Satus</Text>

            <View style={[rncStyles.flexRow]}>
              <View style={[rncStyles.mx1]}>
                <Text style={[rncStyles.textBlack, rncStyles.my1]}>
                  Pending{' '}
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={e => setModel({...model, Pending: e})}
                    value={model.Pending}
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Pending"
                    placeholderTextColor="#003f5c"
                  />
                </View>
              </View>

              <View style={[rncStyles.mx1]}>
                <Text style={[rncStyles.textBlack, rncStyles.my1]}>
                  Running{' '}
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={e => setModel({...model, EndTime: e})}
                    value={model.Running}
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="End Time"
                    placeholderTextColor="#003f5c"
                  />
                </View>
              </View>

              <View>
                <Text style={[rncStyles.textBlack, rncStyles.my1]}>
                  End Time{' '}
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    onChangeText={e => setModel({...model, Running: e})}
                    value={model.EndTime}
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Running"
                    placeholderTextColor="#003f5c"
                  />
                </View>
              </View>
            </View>
          </View> */}
        </View>
        <Text style={[rncStyles.textBlack, rncStyles.my1]}>Satus</Text>
        <View style={[rncStyles.alignItemsStart, rncStyles.flexRow, rncStyles.textStart]}>
        <View style={[rncStyles.flexRow, rncStyles.px1]}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={(e) => {setChecked('first'); setModel({...model, status:'Pending'})}}
          />
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Pending</Text>
        </View>

        <View style={[rncStyles.flexRow, rncStyles.px1]}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={(e) => {setChecked('second'); setModel({...model, status:'Ongoing'})}}
          />
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Ongoing</Text>
        </View>

        <View style={[rncStyles.flexRow, rncStyles.px1]}>
          <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={(e) => {setChecked('third'); setModel({...model, status:'Complete'})}}
          />
          <Text style={[rncStyles.textBlack, rncStyles.my1]}>Complete</Text>
        </View>
      </View>

        {/* <TouchableOpacity style={styles.loginBtn} onPress={adduser}>
        <Text style={styles.btntitle} >SIGN UP </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.loginBtn}>
        <Text style={styles.btntitle}>Already user ? Login</Text>
      </TouchableOpacity> */}

        <TouchableOpacity onPress={addtask} style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  inputView: {
    width: '100%',
    backgroundColor: '#EDF8FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A86FF24',
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
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
    marginBottom: 40,
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 28,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#002055',
  },
  paragraph: {
    fontSize: 16,
    color: '#868D95',
    marginBottom: 30,
  },
});
export default AddTask;
