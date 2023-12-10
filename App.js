import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import HomeScreen from "./screens/homeScreen";
import AuthStack from "./routes/authStack";
import FeedCard from "./components/feedCard";
import HomeStack from "./routes/homeStack";
import Profile from "./screens/profile";
import ProfileStack from "./routes/profileStack";
import MainTabs from "./routes/mainTabs";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
        return null;
  }

  return (
    <AuthStack />
  );
  
}
