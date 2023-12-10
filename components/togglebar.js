import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { globalStyles } from "../styles/global";

export default function ToggleBar({ margin=5,children, isEnabled, toggleSwitch, trackColor= ["#7f7e7e", "#CF5C36"], thumbColor=["#f4f3f4","#fff"] }) {
    return (
        <View style={{...styles.container, marginVertical: margin}}>
            <Text style={globalStyles.paragraph}>{ children }</Text>
            <Switch
                trackColor={{ false: trackColor[0], true: trackColor[1] }}
                thumbColor={isEnabled ? thumbColor[1] : thumbColor[0]}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        // marginVertical: 5,
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})