import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from "../constants/Colors";

const ProfileCard = props => {
    return(
        <View style={styles.card}>
            <View style={styles.rowView}>
                <View style={styles.circleView} />
                <View>
                    <Text>Dr John Doe</Text>
                    <Text>abcd</Text>
                    <Text>xyz</Text>
                </View>
                <View>
                    <Text>Dr John Doe</Text>
                    <Text>abcd</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="VIEW PROFILE" color={Colors.primary} />
                </View>
                <View style={styles.button}>
                    <Button title="BOOKMARK" color={Colors.primary} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        margin: 10
    },
    rowView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 10
    },
    circleView:{
        height:80, 
        width:80, 
        borderRadius:40, 
        backgroundColor: Colors.primary
    },
    buttonContainer:{
        flexDirection:"row", 
        justifyContent: 'space-between', 
    },
    button:{
        width:120,
    }
});

export default ProfileCard;