import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatList from '../screens/chatList';
import Chat from '../screens/chat';





const Stack = createNativeStackNavigator();

export default function ChatStack() {
    return (
            <Stack.Navigator
                initialRouteName="Chats"
            >
                <Stack.Screen
                    name="Chats"
                    component={ChatList}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                />
            </Stack.Navigator>
    )
}