import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Access' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WelcomeScreen(){
  return (

    <WelcomeScreen/>
);

}

function LoginScreen(){
  return(

    <LoginScreen/>
  )

}
