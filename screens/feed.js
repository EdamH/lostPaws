import React, {useState, useEffect} from "react";
import { StyleSheet, View, ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import FeedCard from "../components/feedCard";
import { getPetsByType, getUser, transferPet, sendMessage} from "../endpoints";


export default function Feed({route, navigation}) {
    
    const type = route.params;
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        getPetsByType(type)
            .then((response) => {
                setFeed(response.data);
                // console.log(route.params)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    fetchUser = async (id, navigation) => { 
        console.log(id)
        getUser(id).then((response) => {
            navigation.navigate("chatStack", { screen: "Chat", params: {...response.data, _id: id} })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    adoptPet = async (petId, ownerId, navigation) => {
        transferPet(petId)
            .then((response) => {
                sendMessage("I would like to adopt your pet: " + response.data.petName + "!", ownerId)
                    .then((response) => {
                        navigation.navigate("chatStack", { screen: "Chat", params: {...response.data, _id: ownerId} })
                    }
                )
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={{...globalStyles.container}}>
            <FlatList
                data={feed}
                contentContainerStyle={{ gap: 10, flexGrow: 1, paddingVertical: 20 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                        <FeedCard
                            image={item.petImage}
                            name={item.petName}
                            breed={item.petBreed}
                            location={item.city}
                            sendMessage={() => fetchUser(item.user, navigation)}
                            adoption={type === "Adoption" ? true : false}
                            adoptPet={() => adoptPet(item._id, item.user, navigation)}
                        />
                    </TouchableWithoutFeedback>
                )}
            />
            {/* {feed.map((item) => (
                <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                    <FeedCard
                        // image={item.image}
                        name={item.name}
                        breed={item.breed}
                        location={item.location}
                    />
                </TouchableWithoutFeedback>
            ))} */}
        </View>
    )
}


