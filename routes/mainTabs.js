import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from './homeStack';
import ChatStack from './chatStack';
import Notifications from '../screens/notifications';
import ProfileStack from './profileStack';
import AddPost from '../screens/addPost';




const Tab = createBottomTabNavigator();



export default function MainTabs() {
    return (
            <Tab.Navigator
                initialRouteName="homeStack"
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="homeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="home" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                <Tab.Screen
                    name="chatStack"
                    component={ChatStack}
                    options={{
                        tabBarVisibile: false,
                        tabBarLabel: 'Messages',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="email" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                <Tab.Screen
                    name="add"
                    component={AddPost}
                    options={{
                        headerShown: true,
                        tabBarLabel: 'Add a pet',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="add-circle" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                <Tab.Screen
                    name="notifications"
                    component={Notifications}
                    options={{
                        headerShown: true,
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="notifications" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                <Tab.Screen
                    name="profileStack"
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: '#CF5C36',
                        tabBarInactiveTintColor: '#7f7e7e',
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 0,
                            shadowOpacity: 0,
                        }
                    }}
                />
                </Tab.Navigator>
    )
}