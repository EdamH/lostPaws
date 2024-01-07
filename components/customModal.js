import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, ScrollView } from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from './customButton';
import CustomInput from './customInput';
import { Formik } from 'formik'
import Slider from '@react-native-community/slider';
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
// import axios from "axios";
import * as FileSystem from 'expo-file-system';
import { FileSystemUploadType } from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Base64Binary from 'base64-binary'
import { url, updatePet } from "../endpoints";
import { Image } from 'expo-image';


export default function CustomModal({ item }) {
    // console.log(item)
    const [isOpen, setIsOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const toggleSlider = (value) => {
        setSliderValue(value);
    }
    const [postType, setPostType] = useState(item.postType);
    const togglePostType = (value) => {
        setPostType(value);
    }
    const [petSpecies, setPetSpecies] = useState(item.petSpecies);
    const togglePetSpecies = (value) => {
        setPetSpecies(value);
    }
    const [petGender, setPetGender] = useState(item.petGender);
    const togglePetGender = (value) => {
        setPetGender(value);
    }
    const [formData, setFormData] = useState({});
    const handleFormData = (value) => {
        setFormData(value);
    }

    const [image, setImage] = useState(item.petImage);

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
        const uploadResult = await FileSystem.uploadAsync(url + '/pets/upload', result.assets[0].uri, {
            httpMethod: 'POST',
            uploadType: FileSystemUploadType.MULTIPART,
            fieldName: 'avatar',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setImage(JSON.parse(uploadResult.body).path);
        
    }
    };

    const updatePost = async () => {
        const data = image ? {
            id: item._id,
            petImage: image,
            postType,
            petSpecies,
            petName: formData.name,
            city: formData.city,
            petBreed: formData.breed,
            petAge: formData.age,
            petGender,
            petSize: sliderValue
        } : {
            id: item._id,
            postType,
            petSpecies,
            petName: formData.name,
            city: formData.city,
            petBreed: formData.breed,
            petAge: formData.age,
            petGender,
            petSize: sliderValue
        }
            
        const result = await updatePet(data).then((res) => { setIsOpen(false) });
        console.log(result);
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setIsOpen(true)}>
                <MaterialIcons style={styles.cardIcon} name="edit" size={24} color='#7f7e7e' />
            </TouchableWithoutFeedback>
          {/* <MaterialIcons style={styles.modalToggle} name="add" size={24} onPress={() => setIsOpen(true)} /> */}
          <Modal visible={isOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>         
            <View style={styles.modalContent}>
              <MaterialIcons size={24} style={{...styles.modalToggle, ...styles.modalClose}}  name='close' onPress={() => setIsOpen(false)} />
                <ScrollView style={{ ...styles.container}}>
            <View style={styles.topContainer}>
                <TouchableWithoutFeedback onPress={pickImage}>
                    <View style={styles.addPhoto} >
                        {image && <Image source={url + "/uploads/pets/" + image} style={{...styles.profilePic, ...styles.imageStyle}} />}
                    </View>
                </TouchableWithoutFeedback>
                {/* <Text style={{textAlign: "center", marginTop: 10, color: "#CF5C36", ...globalStyles.paragraph}}>Add Photos</Text> */}
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>What happened to your friend?</Text>
                    <View style={styles.choices}>
                        <TouchableWithoutFeedback onPress={() => togglePostType("Lost")}>
                            <Text style={postType === "Lost" ? styles.chosen : styles.choice}>Lost</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => togglePostType("Found")}>
                            <Text style={postType === "Found" ? styles.chosen : styles.choice}>Found</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => togglePostType("Adoption")}>
                            <Text style={postType === "Adoption" ? styles.chosen : styles.choice}>Adoption</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>Choose a type!</Text>
                    <View style={styles.choices}>
                        <TouchableWithoutFeedback onPress={() => togglePetSpecies("Cat")}>
                            <Text style={petSpecies === "Cat" ? styles.chosen : styles.choice}>Cat</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => togglePetSpecies("Dog")}>
                            <Text style={petSpecies === "Dog" ? styles.chosen : styles.choice}>Dog</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => togglePetSpecies("Other")}>
                            <Text style={petSpecies === "Other" ? styles.chosen : styles.choice}>Other</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                {/* <input type="file" accept="image/*" /> */}
                <View style={styles.privateInformation}>
                    <Text style={globalStyles.titleText}>Information</Text>
                   <Formik
                    initialValues={{name: item.petName, city: item.city, breed: item.petBreed, age: item.petAge}}
                    onSubmit={(values, action) => {
                        // action.resetForm();
                        // console.log("pet added")
                        handleFormData(values)
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
                            <TouchableWithoutFeedback onPress={props.handleSubmit}>
                                    <Text style={{ ...styles.choice, alignSelf: "flex-end" }}>save</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        
                        )}
                    </Formik>
                    
                </View>
                <View style={styles.multipleContainer}>
                    <Text style={globalStyles.titleText}>What gender is your pet?</Text>
                    <View style={styles.choices}>
                        <TouchableWithoutFeedback onPress={() => {togglePetGender("Male")}}>
                            <Text style={petGender === "Male" ? { ...styles.chosen, width: "45%" } : { ...styles.choice, width: "45%" }}>Male</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => {togglePetGender("Female")}}>
                            <Text style={petGender === "Female" ? { ...styles.chosen, width: "45%" } : { ...styles.choice, width: "45%" }}>Female</Text>
                        </TouchableWithoutFeedback>
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
                            onSlidingComplete={(value) => toggleSlider(value)}
                            value={parseInt(item.petSize)}
                                            
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
                                handleClick={updatePost}
                >
                Save    
                </CustomButton>
            </View>
        </ScrollView>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
    );


}

const styles = StyleSheet.create({
    modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    },
  container: {
        paddingVertical: 10,
        backgroundColor: '#EEE5E9',
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
    chosen: {
        borderWidth: 1,
        fontSize: 18,
        padding: 5,
        width: 110, 
        textAlign: "center",
        marginTop: 20,
        borderRadius: 5,
        borderColor: "#CF5C36",
        color: "white",
        backgroundColor: "#CF5C36"
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
    }
});
