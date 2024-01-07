import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { url } from "../endpoints";




export default function FeedCard({adoptPet= () => {console.log("adopt me!")}, sendMessage= () => {console.log("contact me!")}, adoption= false, image=require('../assets/lost.jpg'), name="Milo", location="El Manzah, Tunis", breed="Australian Shepherd", navigation}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={url + "/uploads/pets/" + image} contentFit="cover" />
            <View style={styles.cardDetails}>
                <View style={styles.cardText}>
                    <Text style={styles.mainText}>{name}</Text>
                    <Text style={styles.secondaryText}>{location}</Text>
                    <Text style={styles.secondaryText}>{breed}</Text>
                </View>
                <View style={ adoption ? styles.cardBalls : {...styles.cardBalls, justifyContent: "flex-end"}}>
                    {adoption &&
                        <TouchableWithoutFeedback onPress={adoptPet}>
                            <View style={styles.ball}><MaterialIcons style={styles.cardIcon} name="pets" size={24} color='#7f7e7e' /></View>
                        </TouchableWithoutFeedback>
                    }
                    <TouchableWithoutFeedback onPress={sendMessage}>
                        <View style={styles.ball}><Ionicons style={styles.cardIcon} name="send" size={24} color='#7f7e7e' /></View>
                    </TouchableWithoutFeedback>
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
        padding: 18,
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