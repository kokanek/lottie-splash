import React, { useState, useEffect } from 'react';
import AppSplashScreen from './AppSplashScreen';
import MainApp from './MainApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <AppSplashScreen />;
  }

  return <MainApp />;
}