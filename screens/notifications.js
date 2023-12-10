import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from "../components/customInput";


export default function Notification() { 
    const notifications= [
        {
            image: require("../assets/lost.jpg"),
            desc: "Milo is lost",
            time: "2 hours ago",
        },
        {
            image: require("../assets/found.jpg"),
            desc: "Milo is lost",
            time: "Just now",
        },
        {
            image: require("../assets/adoption.jpg"),
            desc: "Milo is lost",
            time: "2 days ago",
        },
    ]

    const [searchKeywords, setSearchKeywords] = useState("");
    return(
        <View style={{ ...globalStyles.container, ...styles.container }}>
            <View style={{ flexDirection: "row", marginBottom: 20, height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "whitesmoke"}}>
                <CustomInput
                    icon= {['search', 'black']}
                    placeholder="Search"
                    value={searchKeywords}
                    onValueChange={setSearchKeywords}
                    password={false}
                    width={"90%"}
                />
            </View>
            <FlatList
                data={notifications}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                        <View style={styles.notificationCard}>
                            <ImageBackground source={item.image} style={styles.petImage} imageStyle={{borderRadius: 100, borderWidth: 2,borderColor: "black"}}>
                            </ImageBackground>
                            <View style={styles.notificationCardDetails}>
                                    <Text style={styles.mainText}>{item.desc}</Text>
                                    <Text style={styles.secondaryText}>{item.time}</Text>
                            </View>
                            
                        </View>
                    </TouchableWithoutFeedback>
                )}
            
            />

            
        </View>)
}


const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
    },
    petImage: {
        borderRadius: 100,
        width: 50,
        height: 50,
    },
    notificationCard: {
        backgroundColor: "whitesmoke",
        borderBottomWidth: 1,
        borderBottomColor: "#B2B2B2",
        padding: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationCardDetails: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    petCardText: {
        flex: 2,
    },
    cardBalls: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },
    ball: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        // backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 18
    },
    secondaryText: {
        fontSize: 16,
        color: "#B2B2B2"
    }
})