import React, {useState} from "react";
import { StyleSheet, View, ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
import FeedCard from "../components/feedCard";


export default function Feed({route, navigation}) {
    
    const feed = route.params;

    return (
        <View style={{...globalStyles.container}}>
            <FlatList
                data={feed}
                contentContainerStyle={{ gap: 10, flexGrow: 1, paddingVertical: 20 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                        <FeedCard
                            // image={item.image}
                            name={item.name}
                            breed={item.breed}
                            location={item.location}
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


