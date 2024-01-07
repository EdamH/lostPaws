import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from "../components/customInput";
import { getMessages, getCurrent, sendMessage, url } from "../endpoints";
import { Image } from 'expo-image';



export default function Chat({ route }) {
    
    const otherUser = route.params
    console.log(otherUser)
    const [chat, setChat] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => { 
        const fetchData = async () => {
            const currentUser = await getCurrent().then((response) => response.data._id);
            setCurrentUser(currentUser);
            // console.log(otherUser._id)
            const result = await getMessages(otherUser._id)
            setChat(result.data);
            // console.log(result.data[0].sender._id === currentUser)
            // console.log(currentUser);
            // console.log(result.data[2].sender._id);
        };
        fetchData();
    }, []);
    return (
        <View style={{ ...globalStyles.container, ...styles.container }}>
            <FlatList
                data={chat}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, gap: 15, justifyContent: "flex-start", flexDirection: "column-reverse"}}
                renderItem={({ item }) => (
                    <View style={item.sender._id === currentUser ? styles.myMessageContainer : styles.otherMessageContainer}>
                        <Image source={url + "/uploads/" + item.sender.userImage} style={{width: 35, height: 35, alignSelf: "flex-end", marginVertical: 5,borderRadius: 100, borderWidth: 1, borderColor: "black"}} />
                        <View style={item.sender._id === currentUser ? styles.myMessage : styles.otherMessage}>
                            <Text style={item.sender._id === currentUser ? styles.myMessageLabel : styles.otherMessageLabel}>{item.sender._id === currentUser ? "You" : item.sender.username}</Text>
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
                <TouchableWithoutFeedback onPress={async () => {
                    const result = await sendMessage(message, otherUser._id);
                    setChat(result.data);
                    setMessage("");
                }}>
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