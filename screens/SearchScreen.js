import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Header from '../componenets/Header';
import ProfileCard from '../componenets/ProfileCard';

const SearchScreen = props => {
  return (
    <View>
      {/* <Header title="Search" /> */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="ABC" color={'green'} />
        </View>
        <View style={styles.button}>
          <Button title="CDE" color="green" />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  button: {
    width: 80,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default SearchScreen;
