import React from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput} from 'react-native';

import Header from '../componenets/Header';
import Card from '../componenets/Card';

const HomeScreen = props => {
  return (
    //<View><Text>Testing</Text></View>
    <View style={styles.screen}>
      {/* <Header title="Home" /> */}
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={require('../images/mycurve.png')}>
        <TextInput style={styles.textInput} />
      </ImageBackground>
      <View style={styles.cardViewMain}>
        <View style={styles.cardView}>
          <Card title="react native" />
          <Card title="react native" />
          <Card title="react native" />
        </View>
        <View style={styles.cardView}>
          <Card title="react native" />
          <Card title="react native" />
          <Card title="react native" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%'
  },
  imageBackground: {
    width: '100%',
    height: '60%',
  },
  textInput: {
    borderRadius: 30,
    margin: 40,
    backgroundColor: 'white',
    height: 50,
  },
  cardViewMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -100,
    marginBottom: 20,
  },
  cardView: {
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
