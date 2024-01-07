import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



export default function Header({title, main, icon, navigation}) {
    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            {icon && (
                <MaterialIcons name={icon} size={26} color="black" />
            )}
            <Text style={styles.headerText}>{title}</Text>
            {!main &&
                <TouchableOpacity style={styles.burger} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            }
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'coral',
        gap: 10,
        paddingBottom: 15
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    burger: {
        position: 'absolute',
        left: 16,
        bottom: 15
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
});




