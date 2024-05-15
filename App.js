// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  Pressable
} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Navigation from './components/Navigation';
import Profile from './screens/Profile';
import LearnScreen from './screens/LearnScreen';
import PlayDetails from './screens/Stacks/PlayDetails';

import QuizScreen1 from './screens/Stacks/QuizScreen1';
import FlipCardPage from './screens/Stacks/FlipCardPage';
import QuizScreen2 from './screens/Stacks/QuizScreen2';



const Stack = createNativeStackNavigator();


function App() {
  return ( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Login' screenOptions = {{headerShown: false}} >
    <Stack.Screen name = "Login" component = {LoginScreen}/> 
    <Stack.Screen name = "SignUp" component = {SignupScreen}/> 
    <Stack.Screen name = "Navigation" component = {Navigation}/> 
    <Stack.Screen name = "Profile" component = {Profile}/> 
    <Stack.Screen name = "PlayDetails" component = {PlayDetails}/> 
    <Stack.Screen name = "FlipCard" component = {FlipCardPage}/> 
    <Stack.Screen name = "QuizScreen1" component = {QuizScreen1}/> 
    <Stack.Screen name = "QuizScreen2" component = {QuizScreen2}/> 

    </Stack.Navigator> 
    </NavigationContainer >
  );
}

export default App;