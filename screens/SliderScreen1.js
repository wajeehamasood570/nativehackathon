
// import React in our code
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';



// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const SliderScreen1 = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    // setShowRealApp(true);
    navigation.navigate('Login')
  };
  const onSkip = () => {
    // setShowRealApp(true);
    navigation.goBack();
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <View>
        {/* <Icon name="home" size={20} color="white" /> */}
        </View>
        <Text>Next</Text>
      </View>
    );
  };

  const RenderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Skip</Text>
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Done</Text>
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    console.log(item);
    return (
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          height: 100
        }}>
          <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  RenderItem.propTypes = {
    item: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        uri: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={({ item }) => <RenderItem item={item} />}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderDoneButton={RenderDoneButton}
          renderSkipButton={RenderSkipButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </>
  );
};

export default SliderScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // padding: 10,
    // justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    // width: 200,
    // height: 200,
  },
  introTextStyle: {
    fontSize: 35,
    color: 'white',
    // textAlign: 'center',
    paddingHorizontal: 20,
    color:"#002055",
  },
  introTitleStyle: {
    fontSize: 25,
    // textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
    color:"#756EF3",
    paddingHorizontal:20
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#756EF3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Lets create a space for your workflows.',
    title: 'Task Management',
    image: require('../assets/images/intro1.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    text: 'Lets create a space for your workflows.',
    title: 'Task Management',
    image: require('../assets/images/intro2.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's3',
    text: 'Lets create a space for your workflows.',
    title: 'Task Management',
    image: require('../assets/images/intro3.png'),
    backgroundColor: '#20d2bb',
  },
  
];