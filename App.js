import React from "react";
import useCachedResources from "./hooks/useCachedResources";

import AuthStack from "./routes/authStack";


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
        return null;
  }

  return (
    <AuthStack />
  );
  
}
