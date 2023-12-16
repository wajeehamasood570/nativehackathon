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
    <View>
      <View style={[styles.container, rncStyles.positionRelative]}>
        <View style={rncStyles.p3}>
          <Text style={[rncStyles.py2, rncStyles.fs5]}>Welcome Back</Text>
          <Text style={[rncStyles.py2, rncStyles.fs1]}>
            Let’s find your top doctor!
          </Text>
          <Text style={[rncStyles.py2, rncStyles.fsL]}>Doctor’s Inn</Text>
        </View>
      </View>
      <View style={[rncStyles.flexRow, rncStyles.p1]}>
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
      </View>

      {/* //button */}
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddDoctor');
          }}
          style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>Add Doctor</Text>
        </TouchableOpacity>
      </View>


       {/* //button */}
       <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllDoctor');
          }}
          style={[styles.loginBtn]}>
          <Text style={styles.btntitle}>All Doctors</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 414,
    // height: 357,
    borderBottomLeftRadius: 35.33,
    borderBottomRightRadius: 35.33,
    backgroundColor: '#B28CFF',
    color: '#ffffff',
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
    backgroundColor: '#B28CFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 15,
    marginBottom: 0,
    color: 'white',
  },
  btntitle: {
    color: 'white',
  },
});

export default Home;
