import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/homeScreen';
import Feed from '../screens/feed';





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
                />
                <Stack.Screen
                    name="feed"
                    component={Feed}
                />
            </Stack.Navigator>
    )
}