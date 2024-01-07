import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import { globalStyles } from "../styles/global";
// import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { getUserPets, url, toggleFavourite } from '../endpoints';
import { Image } from "expo-image";
import CustomModal from "../components/customModal";


export default function ProfilePets() {
    const [isOpen, setIsOpen] = useState(false);
    const [pets, setPets] = useState([]);
    useEffect(() => {
        getUserPets().then((res) => {
            setPets(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleToggle = async (id) => {
        toggleFavourite(id).then((res) => {
            getUserPets().then((res) => {
            setPets(res.data);
        }).catch((err) => {
            console.log(err);
        });
        }).catch((err) => {
            console.log(err);
        });
    }

    const [myFavourite, setMyFavourite] = useState(false);
    return(
        <View style={{ ...globalStyles.container, ...styles.container }}>
            <View style={{ flexDirection: "row", marginBottom: 20, height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "whitesmoke"}}>
                <TouchableWithoutFeedback onPress={() => setMyFavourite(false)}>
                    {myFavourite ?
                        <Text style={{ fontSize: 20, flex: 1, marginLeft: 10, textAlign: "center" }}>
                        All pets
                        </Text>
                        :
                        <View style={{paddingTop: 15, height: "100%", width:"50%", borderBottomWidth: 2, borderBottomColor: "#CF5C36"}}>
                            <Text style={{ fontSize: 20, flex: 1, marginLeft: 10, textAlign: "center", color: "#CF5C36"}}>
                                All pets
                            </Text>
                        </View>
                        
                    }
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setMyFavourite(true)}>
                    {!myFavourite ?
                        <Text style={{ fontSize: 20, flex: 1, marginLeft: 10, textAlign: "center" }}>
                        Favourites
                        </Text>
                        :
                        <View style={{paddingTop: 15, height: "100%", width:"50%", borderBottomWidth: 2, borderBottomColor: "#CF5C36"}}>
                            <Text style={{ fontSize: 20, flex: 1, marginLeft: 10, textAlign: "center", color: "#CF5C36"}}>
                                Favourites
                            </Text>
                        </View>
                        
                    }
                </TouchableWithoutFeedback>
            </View>
            <FlatList
                data={!myFavourite ? pets : pets.filter((item) => (item.favourite == true))}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => console.log("heyy")}>
                        <View style={styles.petCard}>
                            <Image source={`${url}/uploads/pets/${item.petImage}`} style={{...styles.petImage, borderRadius: 10}} />
                            <View style={styles.petCardDetails}>
                                    <Text style={styles.mainText}>{item.petName}</Text>
                                    <Text style={styles.secondaryText}>{item.petBreed}</Text>
                                    <Text style={styles.secondaryText}>{item.petGender + ", " + item.petAge}</Text>
                                    <Text style={styles.secondaryText}>{item.petLocation}</Text>
                            </View>
                            <View style={styles.cardBalls}>
                                <View style={styles.ball}>
                                    <TouchableWithoutFeedback onPress={() => handleToggle(item._id)}>
                                        <AntDesign style={styles.cardIcon} name={item.favourite ? "heart" : "hearto"} size={23} color='#fa5d52' />
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.ball}>
                                    {/* <TouchableWithoutFeedback onPress={() => setIsOpen(true)}>
                                        <MaterialIcons style={styles.cardIcon} name="edit" size={24} color='#7f7e7e' />
                                    </TouchableWithoutFeedback> */}
                                    <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
                                </View>
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
        flex: 1,
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    petCard: {
        backgroundColor: "whitesmoke",
        borderBottomWidth: 1,
        borderBottomColor: "#B2B2B2",
        padding: 15,
        flexDirection: 'row',
        // height: 120,
    },
    petCardDetails: {
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
    },
    
})