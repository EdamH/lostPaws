import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatList from '../screens/chatList';
import Chat from '../screens/chat';
import Header from '../components/header';





const Stack = createNativeStackNavigator();

export default function ChatStack() {
    return (
            <Stack.Navigator
                initialRouteName="Chats"
            >
                <Stack.Screen
                    name="Chats"
                    component={ChatList}
                    options={({ navigation }) => ({ header: () => <Header navigation={navigation} title="Messenger" main={false} icon='messenger' /> })}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={({ navigation, route }) => ({ header: () => <Header navigation={navigation} title={route.params.username} main={false} icon='messenger' /> })}
                />
            </Stack.Navigator>
    )
}