import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from "../components/customInput";
import { getComms, url } from '../endpoints';
import { Image } from 'expo-image';


export default function ChatList({ navigation }) { 
    const [chats, setChats] = useState(chats);
    useEffect(() => { 
        const fetchData = async () => {
            const result = await getComms()
            setChats(result.data);
        };
        fetchData();
    }, []);
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
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
                data={chats}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Chat", item)}>
                        <View style={styles.notificationCard}>
                            <Image
                                // source={item.userImage}
                                // style={styles.petImage}
                                // imageStyle={{ borderRadius: 100, borderWidth: 2, borderColor: "black" }}
                                style={styles.petImage}
                                // source={item.userImage}
                                source= {url + "/uploads/" + item.userImage}
                                placeholder={blurhash}
                                contentFit="cover"
                                transition={1000}
                            >
                            </Image>
                            <View style={styles.notificationCardDetails}>
                                    <Text style={styles.mainText}>{item.username}</Text>
                                    <Text style={styles.secondaryText}>{item.lastMessage}</Text>
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
        borderWidth: 2,
        borderColor: "black"
    },
    notificationCard: {
        backgroundColor: "whitesmoke",
        borderBottomWidth: 1,
        borderBottomColor: "#B2B2B2",
        padding: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        hegiht: 50,
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