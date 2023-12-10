import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from "../components/customInput";




export default function Chat() {

    const chat = [
        {
            image: require("../assets/lost.jpg"),
            sender: "me",
            message: "Hello from the other side",
        },
        {
            image: require("../assets/found.jpg"),
            sender: "other",
            message: "Hey there, Amria! How are you doing?",
        },
        {
            image: require("../assets/adoption.jpg"),
            sender: "me",
            message: "I'm doing great, thanks! How about you?",
        },
        {
            image: require("../assets/lost.jpg"),
            sender: "other",
            message: "I'm doing great too, thanks!",
        },
        {
            image: require("../assets/found.jpg"),
            sender: "me",
            message: "That's great to hear!",
        },
        {
            image: require("../assets/adoption.jpg"),
            sender: "other",
            message: "I'm doing great too, thanks!",
        },
    ]

    const [message, setMessage] = useState("")
    return (
        <View style={{ ...globalStyles.container, ...styles.container }}>
            <FlatList
                data={chat}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, gap: 15, justifyContent: "flex-end"}}
                renderItem={({ item }) => (
                    <View style={item.sender === "me" ? styles.myMessageContainer : styles.otherMessageContainer}>
                        <ImageBackground source={item.image} imageStyle={{borderRadius: 100, borderWidth: 1, borderColor: "black"}} style={{width: 35, height: 35, alignSelf: "flex-end", marginVertical: 5,}} />
                        <View style={item.sender === "me" ? styles.myMessage : styles.otherMessage}>
                            <Text style={item.sender === "me" ? styles.myMessageLabel : styles.otherMessageLabel}>{item.sender === "me" ? "You" : "Amira Balti"}</Text>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
                    </View>
                )}  
            />
            <View style={styles.inputContainer}>
                <TouchableWithoutFeedback>
                    <Ionicons name="camera" size={28} color="#CF5C36" />
                </TouchableWithoutFeedback>
                <CustomInput placeholder="Type a message..." value={message} handleChange={(value) => setMessage(value)} />
                <TouchableWithoutFeedback>
                    {message !== "" ?
                        <Ionicons name="send" size={24} color="#CF5C36" /> :
                        <Ionicons name="add-circle" size={28} color="#CF5C36" />   
                    }
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
    },
    myMessage: {
        backgroundColor: "#CF5C36",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: "80%",
    },
    otherMessage: {
        backgroundColor: "whitesmoke",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: "80%",
    },
    myMessageContainer: {
        flexDirection: "row-reverse",
        width: "100%",
        paddingHorizontal: 20,
        gap: 10,
    },
    otherMessageContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        gap: 10,
    },
    myMessageLabel: {
        color: "white",
        fontSize: 12,
        marginBottom: 5
    },
    otherMessageLabel: {
        color: "#CF5C36",
        fontSize: 12,
        marginBottom: 5
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 2,
        backgroundColor: "whitesmoke",
        borderTopWidth: 1,
        borderTopColor: "lightgray",
    },
}
)