import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";


export default function HomeScreen({ navigation }) { 
    
    return (
        <View style={{...globalStyles.container, ...styles.container}}>
            
            <ImageBackground source={require('../assets/lost.jpg')} style={styles.feedButton} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate("feed", "Lost") }}>
                    <View style={{ ...styles.buttonDetails, backgroundColor: 'rgba(129, 228, 183, 0.6)', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <Text style={styles.buttonText}>Lost</Text>
                        <View style={styles.friendBox}>
                            <Text style={{color: "rgb(129, 228, 183)"}}>
                                26 friends
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
            
            <ImageBackground source={require('../assets/found.jpg')} style={styles.feedButton}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate("feed", "Found") }}>   
                    <View style={{...styles.buttonDetails, backgroundColor: 'rgba(203, 89, 138, 0.8)'}}>
                        <Text style={styles.buttonText}>Found</Text>
                        <View style={styles.friendBox}>
                            <Text style={{color: "rgb(203, 89, 138)"}}>
                                26 friends
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
            
            <ImageBackground source={require('../assets/adoption.jpg')} style={styles.feedButton} imageStyle={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate("feed", "Adoption") }}>
                    <View style={{ ...styles.buttonDetails, backgroundColor: 'rgba(167, 93, 86, 0.5)', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
                        <Text style={styles.buttonText}>Adoption</Text>
                        <View style={styles.friendBox}>
                            <Text style={{color: "rgb(167, 93, 86)"}}>
                                26 friends
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE5E9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    feedButton: {
        flex: 1,
        width: "100%",
    },
    buttonDetails: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 50,
        justifyContent: "flex-end",
    },
    buttonText: {
        fontSize: 30,
        color: "#fff",
    },
    friendBox: {
        backgroundColor: "#fff",
        borderRadius: 50,
        width: 150,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    }
});