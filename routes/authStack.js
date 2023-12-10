import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignupPage from '../screens/signupPage';
import LoginPage from '../screens/loginPage';
import MainTabs from './mainTabs';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="loginPage"
                    screenOptions={{headerShown: false}} // Fix: Changed 'options' to 'screenOptions'
                >
                    <Stack.Screen
                        name="loginPage"
                        component={LoginPage}
                    />
                    <Stack.Screen
                        name="signupPage"
                        component={SignupPage}
                    />
                    <Stack.Screen
                        name="mainTabs"
                        component={MainTabs}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
}

 