import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import rncStyles from 'rncstyles';


const Home = ({navigation}: any) => {
  const catarr = [
    {
      id: 1,
      pic: '',
    },
  ];
  return (
    <View style={[rncStyles.containerMain]}>
      <View style={[rncStyles.h100]}>
        <Image source={require('../assets/images/cover.png')} />
      </View>

      {/* <View style={[rncStyles.flexRow, rncStyles.p1]}>
        <View style={[rncStyles.p1, rncStyles.justifyContentCenter]}>
          <View style={[styles.categories]}>
            <Image source={require('../assets/all.png')} />
          </View>
          <Text
            style={[
              rncStyles.textBlack,
              rncStyles.textCenter,
              styles.categoriestext,
            ]}>
            All
          </Text>
        </View>

        <View style={[rncStyles.p1, rncStyles.justifyContentCenter]}>
          <View style={[styles.categories]}>
            <Image source={require('../assets/cardio.png')} />
          </View>
          <Text
            style={[
              rncStyles.textBlack,
              rncStyles.textCenter,
              styles.categoriestext,
            ]}>
            All
          </Text>
        </View>

        <View style={[rncStyles.p1, rncStyles.justifyContentCenter]}>
          <View style={[styles.categories]}>
            <Image source={require('../assets/medicine.png')} />
          </View>
          <Text
            style={[
              rncStyles.textBlack,
              rncStyles.textCenter,
              styles.categoriestext,
            ]}>
            All
          </Text>
        </View>

        <View style={[rncStyles.p1, rncStyles.justifyContentCenter]}>
          <View style={[styles.categories]}>
            <Image source={require('../assets/general.png')} />
          </View>
          <Text
            style={[
              rncStyles.textBlack,
              rncStyles.textCenter,
              rncStyles.textCenter,
              styles.categoriestext,
            ]}>
            All
          </Text>
        </View>
      </View> */}

      {/* //button */}
      {/* <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddDoctor');
          }}
          style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>Add Doctor</Text>
        </TouchableOpacity>
      </View> */}

      {/* //button */}
      {/* <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllDoctor');
          }}
          style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>All Doctors</Text>
        </TouchableOpacity>
      </View> */}

      {/* // */}
      <View style={[styles.container]}>
        <View style={rncStyles.p2}>
          <Text style={[rncStyles.py1, rncStyles.fsXL, rncStyles.textInfo, rncStyles.textCenter, styles.headingtext]}>Taskycy</Text>
          <Text style={[rncStyles.py1, rncStyles.fsL, styles.headdes,rncStyles.textCenter]}>
            Building better Work Spaces
          </Text>
          <Text style={[rncStyles.py1, rncStyles.fs6,styles.headdes, rncStyles.textCenter]}>Create a unique emotional story that describes better than words</Text>

           <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Slider1');
          }}
          style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:100
  },
  container: {
    // width: 360,
    height: 407,
    borderTopLeftRadius: 35.33,
    borderTopRightRadius: 35.33,
    backgroundColor: '#ffffff',
    color: '#0000FF',
    width: '100%',
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  headingtext:{
    color:"#756EF3",
    fontWeight:"bold",
    fontFamily:'Poller One',
  },
  headdes:{
   color: "#2F394B",
   fontFamily:'Product Sans',
  //  fontSize:37,
  },
  categories: {
    // width: 75,
    // height: 75,
    borderColor: '#F7F8F8',
    borderRadius: 20,
    borderWidth: 15,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriestext: {
    // textAlign: 'center',
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#5451D6',
    fontSize:20,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 15,
    marginBottom: 0,
    color: 'white',
    fontFamily:'Poller One',
  },
  btntitle: {
    color: 'white',
  },
});

export default Home;
