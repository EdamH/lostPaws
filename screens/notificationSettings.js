import React, {useState} from "react";
import { StyleSheet, View, Text, Switch} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import ToggleBar from "../components/togglebar";
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';




export default function NotificationSettings({ navigation }) {
    const [push, setIsPush] = useState(false);
    const togglePush = () => setIsPush(previousState => !previousState);

    const [email, setIsEmail] = useState(false);
    const toggleEmail = () => setIsEmail(previousState => !previousState);

    const [text, setIsText] = useState(false);
    const toggleText = () => setIsText(previousState => !previousState);

    const [location, setLocation] = useState(false);
    const toggleLocation = () => setLocation(previousState => !previousState);

    const [slide, setSlider] = useState(2);
    const toggleSlider = (value) => setSlider(previousState => value);

    return (
        <View style={{...globalStyles.container, ...styles.container}}>
            <ToggleBar isEnabled={push} toggleSwitch={togglePush} >
                Allow push notifications
            </ToggleBar>
            <ToggleBar isEnabled={email} toggleSwitch={toggleEmail} >
                Allow email notifications
            </ToggleBar>
            <ToggleBar isEnabled={text} toggleSwitch={toggleText} >
                Allow text notifications
            </ToggleBar>

            <View style={styles.locationContainer}>
                <View style={styles.location}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <MaterialIcons name="location-on" size={34} color="#CF5C36" />
                        <Text style={globalStyles.paragraph}>Use my location</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#7f7e7e", true: "#CF5C36" }}
                        thumbColor={push ? "#fff" : "#f4f3f4"}
                        onValueChange={toggleLocation}
                        value={location}
                        />
                </View>
                <View style={styles.location}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <MaterialIcons name="add-location" size={34} color="#CF5C36" />
                        <Text style={globalStyles.paragraph}>Add new location</Text>
                    </View>
                </View>
            </View>

            <View style={styles.sliderContainer}>
                <Text style={globalStyles.titleText}>Notification Radius</Text>
                <Slider
                    style={{width: "100%", height: 40}}
                    minimumValue={2}
                    maximumValue={20}
                    step={1}
                    minimumTrackTintColor="#EFC88B"
                    maximumTrackTintColor="#7C7C7C"
                    thumbTintColor="#CF5C36"
                    onSlidingComplete={(value) => toggleSlider(value)}
                />
                <Text style={globalStyles.secondaryText}>Current radius: {slide} kilometers</Text>
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
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    locationContainer: {
        backgroundColor: "whitesmoke",
        marginVertical: 5,
    },
    location: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        paddingHorizontal: 10,
    },
    sliderContainer: {
        backgroundColor: "whitesmoke",
        marginVertical: 5,
        padding: 10,
    },
})