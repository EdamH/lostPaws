
import React, {useState} from 'react';
import { TextInput, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomInput({ icon, password=false, placeholder, handleChange, value, handleBlur, width = '80%' }) {
    
    const [visible, setVisible] = useState(false);
    return (
        <View style={{ ...styles.inputContainer, width: width }}>
            {icon && <Ionicons name={icon[0]} size={24} color={icon[1]} />}
            <TextInput
                style={styles.input}
                placeholder={placeholder || ''}
                onChangeText={handleChange}
                value={value}
                onBlur={handleBlur}
                secureTextEntry={password ? !visible : false}
            />
            {password && (
                <TouchableWithoutFeedback onPress={() => { setVisible((prevVisible) => !prevVisible) }}>
                    <Ionicons style={styles.password} name={visible ? 'eye' : 'eye-off'} size={24} color='black' />
                </TouchableWithoutFeedback>
            )}
        </View>
    );

};



const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        borderRadius: 50,
        margin: 10,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        height: "auto"
    },
    input: {
        padding: 10,
        fontSize: 18,
    },
    password: {
        position: 'absolute',
        right: 15,
        // alignSelf: 'flex-end'
    }
});