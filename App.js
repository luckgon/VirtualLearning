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
        <Stack.Screen name='Welcome' component={WellcomeScreen}/>
        <Stack.Screen name='Acess' component={LoginnScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WellcomeScreen({navigation}){
  return (

    <WelcomeScreen/>
);

}

function LoginnScreen(){
  return(

    <LoginScreen/>
  )

}
