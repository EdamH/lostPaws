import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { Formik } from 'formik'
import { updateProfile } from "../endpoints";
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function ChangePassword() {

    const [passwordInformation, setPasswordInformation] = useState({});
    const updateUser = async () => {
        console.log(passwordInformation)
        const updateResult = await updateProfile({ passwordInformation: passwordInformation });
        AsyncStorage.setItem('accessToken', updateResult.data.accessToken);
     }
    return (
        <View style={{...globalStyles.container, ...styles.container}}>
            <View style={styles.privateInformation}>
                    <Text style={globalStyles.titleText}>Change your Password!</Text>
                   <Formik
                    initialValues={{currentPassword: "", newPassword: ""}}
                    onSubmit={(values, action) => {
                        setPasswordInformation(values)
                    }}
                    >
                        {(props) => (
                        <View>
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Current Password</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="Enter your current Password"
                                handleChange={props.handleChange('currentPassword')}
                                value={props.values.currentPassword}
                                handleBlur={props.handleBlur('currentPassword')}
                                password={true}
                                width="95%"
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>New Password</Text>
                            <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your new password"
                                handleChange={props.handleChange('newPassword')}
                                value={props.values.newPassword}
                                handleBlur={props.handleBlur('newPassword')}
                                password={true}
                                width= "95%"
                            />
                            <TouchableWithoutFeedback onPress={props.handleSubmit}>
                                        <Text style={{ ...styles.choice, alignSelf: "flex-end" }}>save</Text>
                            </TouchableWithoutFeedback>
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
                handleClick={() => {
                    updateUser();
                    // navigation.navigate("Profile")
                }
                }
            >
                Save    
            </CustomButton>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    privateInformation: {
        backgroundColor: "whitesmoke",
        marginVertical: 10,
        padding: 10
    },
    choice: {
        borderWidth: 1,
        fontSize: 18,
        padding: 5,
        width: 110, 
        textAlign: "center",
        marginTop: 20,
        borderRadius: 5,
        borderColor: "#B2B2B2",
        color: "#CF5C36"
    }
})