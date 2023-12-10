import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/profile';
import ProfileDetails from '../screens/profileDetails';
import ProfilePets from '../screens/profilePets';
import ChangePassword from '../screens/changePassword';
import NotificationSettings from '../screens/notificationSettings';





const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    return (
            <Stack.Navigator
                initialRouteName="profile"
                // screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="My details"
                    component={ProfileDetails}
                />
                <Stack.Screen
                    name="Pets"
                    component={ProfilePets}
                />
                <Stack.Screen
                    name="Change password"
                    component={ChangePassword}
                />
                <Stack.Screen
                    name="Notifications"
                    component={NotificationSettings}
                />
            </Stack.Navigator>
    )
}