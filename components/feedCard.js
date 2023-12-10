import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function FeedCard({image=require('../assets/lost.jpg'), name="Milo", location="El Manzah, Tunis", breed="Australian Shepherd", navigation}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} resizeMode="cover" />
            <View style={styles.cardDetails}>
                <View style={styles.cardText}>
                    <Text style={styles.mainText}>{name}</Text>
                    <Text style={styles.secondaryText}>{location}</Text>
                    <Text style={styles.secondaryText}>{breed}</Text>
                </View>
                <View style={styles.cardBalls}>
                    <View style={styles.ball}><Ionicons style={styles.cardIcon} name="share-social" size={24} color='#7f7e7e' /></View>
                    <View style={styles.ball}><Ionicons style={styles.cardIcon} name="send" size={24} color='#7f7e7e' /></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 300,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff",
        alignSelf: 'center',
    },
    image: {
        flex: 3,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%'
    },
    cardDetails: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
    },
    cardText: {
        flex: 2,
    },
    cardBalls: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ball: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 18
    },
    secondaryText: {
        fontSize: 16,
        color: "#B2B2B2"
    }
})