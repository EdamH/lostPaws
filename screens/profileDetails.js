import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { Formik } from 'formik'
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { url, updateProfile } from "../endpoints";



export default function ProfileDetails({ navigation, route }) {
    
    
    const [publicInformation, setPublicInformation] = useState(false);
    const [privateInformation, setPrivateInformation] = useState(false);
    const [userImage, setUserImage] = useState(false);
    const thisUser = route.params;
    // console.log(Boolean(userImage))
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
    });

    // console.log(result);
    // UPLOAD IMAGE
    if (!result.canceled) {
        const token = await AsyncStorage.getItem('accessToken');
        const uploadResult = await FileSystem.uploadAsync(url + '/users/upload', result.assets[0].uri, {
            httpMethod: 'POST',
            uploadType: FileSystemUploadType.MULTIPART,
            fieldName: 'avatar',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(uploadResult.body);
        setUserImage(JSON.parse(uploadResult.body).path);
        
    }
    };

    const updateUser = async () => {
        const updateResult = await updateProfile({ publicInformation: publicInformation, privateInformation: privateInformation });
        AsyncStorage.setItem('accessToken', updateResult.data.accessToken);
        console.log({publicInformation: publicInformation, privateInformation: privateInformation});
     }
    
    return (
        <ScrollView style={{ ...globalStyles.container, ...styles.container }}>
            <TouchableWithoutFeedback onPress={pickImage}>
                <View style={styles.topContainer}>
                    {userImage && <Image source={{ uri: userImage }} style={{ ...styles.profilePic, ...styles.imageStyle }} />}
                    <Image source={url + "/uploads/" + thisUser.userImage} style={{...styles.profilePic, ...styles.imageStyle}} />
                    <Text style={{textAlign: "center", marginTop: 5, color: "#CF5C36", ...globalStyles.paragraph}}>Edit</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.bottomContainer}>
                <View style={styles.publicInformation}>
                    <Text style={globalStyles.titleText}>Public Information</Text>
                   <Formik
                    initialValues={{firstName: thisUser.firstName, lastName: thisUser.lastName, city: thisUser.city}}
                    onSubmit={(values, action) => {
                        // action.resetForm();
                        console.log("user added")
                        setPublicInformation(values)
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
                                password={false}
                                width="90%"
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Last Name</Text>
                            <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('lastName')}
                                value={props.values.lastName}
                                handleBlur={props.handleBlur('lastName')}
                                width="90%"
                                />
                                <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>City</Text>
                                <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('city')}
                                value={props.values.city}
                                handleBlur={props.handleBlur('city')}
                                width="90%"
                                />

                                <TouchableWithoutFeedback onPress={props.handleSubmit}>
                                        <Text style={{ ...styles.choice, alignSelf: "flex-end" }}>save</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            
                            
                        )}
                    </Formik> 
                </View>
                <View style={styles.privateInformation}>
                    <Text style={globalStyles.titleText}>Private Information</Text>
                   <Formik
                    initialValues={{phone: thisUser.phone, email: thisUser.email}}
                    onSubmit={(values, action) => {
                        action.resetForm();
                        console.log("user added")
                        setPrivateInformation(values)
                    }}
                    >
                        {(props) => (
                        <View>
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Phone Number</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="e-mail address"
                                handleChange={props.handleChange('phone')}
                                value={props.values.phone}
                                handleBlur={props.handleBlur('phone')}
                                password={false}
                                width="90%"
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Email Address</Text>
                            <CustomInput
                                // icon= {['lock-closed', 'black']}
                                placeholder="Enter your password"
                                handleChange={props.handleChange('email')}
                                value={props.values.email}
                                handleBlur={props.handleBlur('email')}
                                width="90%"
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