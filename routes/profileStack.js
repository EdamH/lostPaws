import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/profile';
import ProfileDetails from '../screens/profileDetails';
import ProfilePets from '../screens/profilePets';
import ChangePassword from '../screens/changePassword';
import NotificationSettings from '../screens/notificationSettings';
import Header from '../components/header';





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
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title="My details" main={false} icon='info-outline' /> })}
                />
                <Stack.Screen
                    name="Pets"
                    component={ProfilePets}
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title="My pets" main={false} icon='pets' /> })}
                />
                <Stack.Screen
                    name="Change password"
                    component={ChangePassword}
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title="My Password" main={false} icon='lock' /> })}
                />
                <Stack.Screen
                    name="Notifications"
                    component={NotificationSettings}
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title="Notification Settings" main={false} icon='notifications' /> })}
                />
            </Stack.Navigator>
    )
}