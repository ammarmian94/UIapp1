import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import Colors from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
        <Icon name="menu" size={50} />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.headerColor,
    flexDirection: 'row'
  },
  menu: {
      justifyContent: 'center',
      paddingLeft: 10
  },
titleView:{
    justifyContent: 'center',
    paddingLeft: 10
},
headerTitle:{
    color: 'black',
    fontSize: 25
},
});

export default Header;
