import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = props => {
    return(
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.title}</Text>
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
        borderRadius: 20
    },
    cardText:{
        color: 'black',
        fontSize: 20
    }
});

export default Card;