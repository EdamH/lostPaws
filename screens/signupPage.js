import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomInput from "../components/customInput";
import CustomButton from "../components/customButton";
// FORM HANDLING
import { Formik } from 'formik'
// FORM VALIDATION
import * as yup from 'yup'

const reviewSchema = yup.object({
    name: yup.string().required().min(4),
    mail: yup.string().required().email(),
    password: yup.string().required().min(6).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
    confirmedPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
});


export default function SignupPage({ navigation }) {
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
                }}
                validationSchema={reviewSchema}
                >
                    {(props) => (
                    <View style={{width: "100%", alignItems: "center"}}>
                        <CustomInput
                            icon={['person', 'black']}
                            placeholder="Username"
                            handleChange={props.handleChange('name')}
                            value={props.values.name}
                            handleBlur={props.handleBlur('name')}
                            password={false}
                            width={"90%"}
                        />
                        {/* ERROR TEXT */}
                        {props.touched.name && <Text style={globalStyles.errorText}>{ props.touched.name && props.errors.name}</Text>}    
                        <CustomInput
                            icon= {['mail', 'black']}
                            placeholder="e-mail address"
                            handleChange={props.handleChange('mail')}
                            value={props.values.mail}
                            handleBlur={props.handleBlur('mail')}
                            password={false}
                            width={"90%"}
                        />
                        {/* ERROR TEXT */}
                        {props.touched.mail && <Text style={globalStyles.errorText}>{ props.touched.mail && props.errors.mail}</Text>}    
                        <CustomInput
                            icon= {['lock-closed', 'black']}
                            placeholder="Enter your password"
                            handleChange={props.handleChange('password')}
                            value={props.values.password}
                            handleBlur={props.handleBlur('password')}
                            password={true}
                            width={"90%"}
                        />
                        {/* ERROR TEXT */}
                        {props.touched.password && <Text style={globalStyles.errorText}>{ props.touched.password && props.errors.password}</Text>}
                        <CustomInput
                            icon= {['lock-closed', 'black']}
                            placeholder="Confirm your password"
                            handleChange={props.handleChange('confirmedPassword')}
                            value={props.values.confirmedPassword}
                            handleBlur={props.handleBlur('confirmedPassword')}
                            password={true}
                            width={"90%"}
                        />
                        {/* ERROR TEXT */}
                        {props.touched.confirmedPassword && <Text style={globalStyles.errorText}>{ props.touched.confirmedPassword && props.errors.confirmedPassword}</Text>}    
                        {/* <Button title='submit' color='maroon' onPress={props.handleSubmit} /> */}
                        <CustomButton handleClick={props.handleSubmit} width={"90%"}>signup</CustomButton>
                        
                    </View>
                    )}
                </Formik>
                <Text style={styles.secondaryText}>
                    Already have an account? 
                    <TouchableWithoutFeedback onPress={() => {navigation.navigate('loginPage')}}>
                        <Text style={{ color: "#CF5C36", textDecorationLine: "underline", fontWeight: "bold"}}> Login!
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