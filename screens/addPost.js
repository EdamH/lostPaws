import React, {useState} from "react";
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import CustomInput from "../components/customInput";
import { Formik } from 'formik'
import Slider from '@react-native-community/slider';
import { MaterialIcons } from "@expo/vector-icons";


export default function AddPost({ navigation }) {
    
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
                <View style={styles.addPhoto} >
                    <MaterialIcons name="add-a-photo" size={40} color="black" />
                </View>
                <Text style={{textAlign: "center", marginTop: 5, color: "#CF5C36", ...globalStyles.paragraph}}>Add Photos</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>What happened to your friend?</Text>
                    <View style={styles.choices}>
                        <Text style={styles.choice}>Lost</Text>
                        <Text style={styles.choice}>Found</Text>
                        <Text style={styles.choice}>Adoption</Text>
                    </View>
                </View>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>Choose a type!</Text>
                    <View style={styles.choices}>
                        <Text style={styles.choice}>Cat</Text>
                        <Text style={styles.choice}>Dog</Text>
                        <Text style={styles.choice}>Other</Text>
                    </View>
                </View>
                <View style={styles.privateInformation}>
                    <Text style={globalStyles.titleText}>Information</Text>
                   <Formik
                    initialValues={{name: "", city: "", breed: "", age: ""}}
                    onSubmit={(values, action) => {
                        action.resetForm();
                        console.log("pet added")
                        // console.log(values)
                    }}
                    >
                        {(props) => (
                        <View style={{width: "100%"}}>
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Pet's name</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="Pet's name"
                                handleChange={props.handleChange('name')}
                                value={props.values.name}
                                handleBlur={props.handleBlur('name')}
                                password={false}
                                width= "90%"    
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>City</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="Relevant city"
                                handleChange={props.handleChange('city')}
                                value={props.values.city}
                                handleBlur={props.handleBlur('city')}
                                password={false}
                                width= "90%"    
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Breed</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="Enter your pet's breed"
                                handleChange={props.handleChange('breed')}
                                value={props.values.breed}
                                handleBlur={props.handleBlur('breed')}
                                password={false}
                                width= "90%"    
                                />
                            <Text style={{...globalStyles.secondaryText, marginLeft:"5%", marginTop: 5, fontSize: 15}}>Age</Text>    
                            <CustomInput
                                // icon= {['mail', 'black']}
                                placeholder="Enter your pet's age"
                                handleChange={props.handleChange('age')}
                                value={props.values.age}
                                handleBlur={props.handleBlur('age')}
                                password={false}
                                width= "90%"    
                                />
                        </View>
                            
                        )}
                    </Formik>
                    
                </View>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>What gender is your pet?</Text>
                    <View style={styles.choices}>
                        <Text style={{...styles.choice, width: "45%"}}>Male</Text>
                        <Text style={{...styles.choice, width: "45%"}}>Female</Text>
                    </View>
                </View>

                <View style={styles.sizeContainer}>
                    <Text style={globalStyles.titleText}>Size</Text>
                    <View style={styles.sliderContainer}>
                        <MaterialIcons name="pets" size={18} color="#cf5c36" />
                        <Slider
                            style={{width: "80%", height: 40}}
                            minimumValue={2}
                            maximumValue={20}
                            step={1}
                            minimumTrackTintColor="#EFC88B"
                            maximumTrackTintColor="#7C7C7C"
                            thumbTintColor="#CF5C36"
                            // onSlidingComplete={(value) => toggleSlider(value)}
                        />
                        <MaterialIcons name="pets" size={24} color="#cf5c36" />
                    </View>
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
        paddingVertical: 30
    },
    bottomContainer: {
        paddingVertical: 10
    },
    addPhoto: {
        borderRadius: 100,
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: "black",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    multipleContainer: {
        backgroundColor: "whitesmoke",
        marginVertical: 5,
        padding: 10
    },
    choices: {
        flexDirection: "row",
        justifyContent: "start",
        gap: 15
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
    },
    sizeContainer: {
        backgroundColor: "whitesmoke",
        marginVertical: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    sliderContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    privateInformation: {
        backgroundColor: "whitesmoke",
        marginVertical: 10,
        padding: 10
    }

})