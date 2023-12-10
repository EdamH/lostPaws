import React, {useState} from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableWithoutFeedback, FlatList} from 'react-native';
import { globalStyles } from "../styles/global";
import CustomButton from "../components/customButton";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Profile({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <LinearGradient
                style={styles.topContainer}
                colors={['#cf5c36', '#d87944', '#df9558', '#e7af6f', '#efc88b']}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }}
                location={[0.7, 0.8, 0.85, 0.9, 1]}
            >
                <View style={styles.logout}>
                    <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                        <MaterialIcons name="logout" size={24} color="black" />
                    </TouchableWithoutFeedback>
                </View>
                <ImageBackground source={require('../assets/found.jpg')} imageStyle={styles.imageStyle} style={styles.profilePic} />
            </LinearGradient>
            <View style={styles.bottomContainer}></View>
            <View style={styles.optionsContainer}>
                <FlatList
                    style={{ width: "100%" }}
                    data={[
                        {key: 'My details'},
                        {key: 'Pets'},
                        { key: 'Notifications' }, 
                        { key: 'Settings' },
                        { key: 'Change password' },
                    ]}
                    ListHeaderComponent={() =>
                        <View style={{ height: 75, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#B2B2B2", paddingVertical: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>User Name</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10, color: '#B2B2B2' }}>Sfax Tunis</Text>
                        </View>
                    }
                    renderItem={({item}) => 
                        <TouchableWithoutFeedback onPress={() => navigation.navigate(item.key)}>
                            <View style={{height: 50, justifyContent: "center", borderBottomWidth: 1, borderBottomColor: "#B2B2B2"}}>
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>{item.key}</Text>
                                <MaterialIcons name="arrow-forward-ios" size={24} color="#B2B2B2" style={{position: "absolute", right: 5}} />
                            </View>
                        </TouchableWithoutFeedback>
                    }
                    ListFooterComponent={() =>
                        <View style={{ height: 75, justifyContent: "center", alignItems: "center" }}>
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
                                Log Out
                            </CustomButton>
                        </View>
                    }
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    topContainer: {
        flex: 3,
        backgroundColor: "#CF5C36",
        justifyContent: "center",
    },
    bottomContainer: {
        flex: 5,
        backgroundColor: "#EEE5E9",
    },
    profilePic: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 100,
    },
    optionsContainer: {
        position: "absolute",
        width: "90%",
        backgroundColor: "white",
        alignSelf: "center",
        alignItems: "center",
        padding: 0,
        top: "28.8%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
    },
    logout: {
        position: "absolute",
        right: 30,
        top: 35,
    },
    imageStyle: {
        borderRadius: 100,
        width: 120,
        height: 120,
        borderWidth: 2,
        borderColor: "black" 
    }
})