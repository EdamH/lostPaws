import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from './homeStack';
import ChatStack from './chatStack';
import Notifications from '../screens/notifications';
import ProfileStack from './profileStack';
import AddPost from '../screens/addPost';
import Header from '../components/header';




const Tab = createBottomTabNavigator();



export default function MainTabs({ route }) {
    return (
            <Tab.Navigator
                initialRouteName="homeStack"
                screenOptions={{ headerShown: false }}
                data= {route.params}
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
                        },

                    }}
                />
                <Tab.Screen
                    name="add"
                    component={AddPost}
                    options={(route, navigation) => ({
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
                        },
                        header: () => <Header title='Add a pet' main={true} icon='add-circle' />
                    })}
                />
                <Tab.Screen
                    name="notifications"
                    component={Notifications}
                    options={(route, navigation) => ({
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
                        },
                        header: () => <Header title='Notifications' main={true} icon='notifications' />
                    })}
                    
                
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