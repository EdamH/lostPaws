import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/homeScreen';
import Feed from '../screens/feed';
import Header from '../components/header';





const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator
                initialRouteName="homeScreen"
                // screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name="homeScreen"
                    component={HomeScreen}
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title='Home' main={true} icon='home' /> })}
                />
                <Stack.Screen
                    name="feed"
                    component={Feed}
                    options={({ route, navigation }) => ({ header: () => <Header navigation={navigation} title={route.params} main={false} icon='search' /> })}

                />
            </Stack.Navigator>
    )
}