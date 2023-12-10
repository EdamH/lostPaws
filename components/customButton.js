import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function CustomButton({ icon, borderRadius=50, gradient, fontSize=24, children, handleClick, height="auto", width="auto", backgroundColor="#CF5C36", textColor="#fff"}) { 
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            
            <LinearGradient
            style={{ ...styles.buttonContainer, height: height, width: width, borderRadius: borderRadius }}
            colors={gradient ? gradient.colors : [backgroundColor, backgroundColor]}
            start={gradient && {x: gradient.start[0], y: gradient.start[1] }}
            end={gradient && { x: gradient.end[0], y: gradient.end[1] }}
            locations={gradient ? gradient.location : [0,1] }

            >
                {icon && <Ionicons name={icon[0]} size={24} color={icon[1]} />}
                {children && <Text style={{ color: textColor, fontSize: fontSize}}>{children}</Text>}
            </LinearGradient>
            
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        margin: 10,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 10,
        fontSize: 18,
    },
});