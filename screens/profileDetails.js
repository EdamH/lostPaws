import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { Formik } from 'formik'



export default function ProfileDetails({ navigation }) {
    
    const currentUser = {
        firstName: "Edam",
        lastName: "Hamza",
        city: "Sfax, Tunis",
        phoneNumber: "12345678",
        email: "itsame@mail.here"
    }
    return (
        <ScrollView style={{ ...globalStyles.container, ...styles.container}}>
            <View style={styles.topContainer}>
                <ImageBackground source={require('../assets/found.jpg')} imageStyle={styles.imageStyle} style={styles.profilePic} />
                <Text style={{textAlign: "center", marginTop: 5, color: "#CF5C36", ...globalStyles.paragraph}}>Edit</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.publicInformation}>
                    <Text style={globalStyles.titleText}>Public Information</Text>
                   <Formik
                    initialValues={{firstName: currentUser.firstName, lastName: currentUser.lastName, city: currentUser.city}}
                    onSubmit={(values, action) => {
                        action.resetForm();
                        console.log("user added")
                        console.log(values)
                    }}
                    >
                        {(props) => (
                        <View>
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>First Name</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="e-mail address"
                                handleChange={props.handleChange('firstName')}
                                value={props.values.firstName}
                                handleBlur={props.handleBlur('firstName')}
                                password= {false}
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Last Name</Text>
                            <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('lastName')}
                                value={props.values.lastName}
                                handleBlur={props.handleBlur('lastName')}
                                />
                                <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>City</Text>
                                <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('city')}
                                value={props.values.city}
                                handleBlur={props.handleBlur('city')}
                            />
                        </View>
                            
                        )}
                    </Formik> 
                </View>
                <View style={styles.privateInformation}>
                    <Text style={globalStyles.titleText}>Private Information</Text>
                   <Formik
                    initialValues={{phoneNumber: currentUser.phoneNumber, email: currentUser.email}}
                    onSubmit={(values, action) => {
                        action.resetForm();
                        console.log("user added")
                        console.log(values)
                    }}
                    >
                        {(props) => (
                        <View>
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Phone Number</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="e-mail address"
                                handleChange={props.handleChange('phoneNumber')}
                                value={props.values.phoneNumber}
                                handleBlur={props.handleBlur('phoneNumber')}
                                password= {false}
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Email Address</Text>
                            <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('email')}
                                value={props.values.email}
                                handleBlur={props.handleBlur('email')}
                                />
                        </View>
                            
                        )}
                    </Formik>
                </View>
                <CustomButton
                                width="95%"
                                borderRadius={8}
                                fontSize={18}
                                gradient={{
                                    colors: ['#cf5c36', '#da743b', '#e48b43', '#eca24e', '#f4b95c'],
                                    start: [0, 1],
                                    end: [1, 0],
                                    location: [0, 0.3, 0.5, 0.6, 0.8]
                                }}
                >
                Save    
                </CustomButton>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    topContainer: {
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        paddingVertical: 10
    },
    bottomContainer: {
        paddingVertical: 10
    },
    profilePic: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 100,
    },
    imageStyle: {
        borderRadius: 100,
        width: 120,
        height: 120,
        borderWidth: 2,
        borderColor: "black" 
    },
    publicInformation: {
        backgroundColor: "whitesmoke",
        marginVertical: 10,
        padding: 10
    },
    privateInformation: {
        backgroundColor: "whitesmoke",
        marginVertical: 10,
        padding: 10
    }

})