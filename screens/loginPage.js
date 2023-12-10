import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
// FORM HANDLING
import { Formik } from 'formik'


export default function LoginPage({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Image 
                style={ styles.header } 
                source={require('../assets/loginBack.png')}
                resizeMode="cover" // or "cover", "stretch", etc.
            />
            <View style={styles.loginBox}>
                <Formik
                initialValues={{ name: '', mail: '', password: '', confirmedPassword: '' }}
                onSubmit={(values, action) => {
                    action.resetForm();
                    console.log("user added")
                    console.log(values)
                    navigation.navigate('mainTabs')
                }}
                >
                    {(props) => (
                    <View style={{width: "100%", alignItems: "center"}}>
                        <CustomInput
                            icon= {['mail', 'black']}
                            placeholder="e-mail address"
                            handleChange={props.handleChange('mail')}
                            value={props.values.mail}
                            handleBlur={props.handleBlur('mail')}
                            password={false}
                            width={'90%'}    
                        />
                        <CustomInput
                            icon= {['lock-closed', 'black']}
                            placeholder="Enter your password"
                            handleChange={props.handleChange('password')}
                            value={props.values.password}
                            handleBlur={props.handleBlur('password')}
                            password={true}
                            width={'90%'}
                        />
                        <Text style={{...styles.secondaryText, textDecorationLine: 'underline', width: "90%"}}>I forgot my password</Text>    
                        <CustomButton handleClick={props.handleSubmit} width={"90%"}>Log in</CustomButton>
                        
                    </View>
                        
                    )}
                </Formik>
                <Text style={styles.secondaryText}>
                    Don't have an account? 
                    <TouchableWithoutFeedback onPress={() => {navigation.navigate('signupPage')}}>
                        <Text style={{ color: "#CF5C36", textDecorationLine: "underline", fontWeight: "bold"}}> SIGN UP!
                        </Text>
                    </TouchableWithoutFeedback>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flex: 1,
    },
    loginBox: {
        width: '100%',
        flex: 2,
        backgroundColor: '#EEE5E9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryText: {
        color: '#B2B2B2',
        margin: 15,
        textAlign: 'right'
    },
});