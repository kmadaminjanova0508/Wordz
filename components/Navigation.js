import Learn from '../screens/LearnScreen';
import PlayScreen from '../screens/PlayScreen';
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import ShopDetails from '../screens/Stacks/ShopDetails';
import Profile from '../screens/Profile';
import PlayDetails from '../screens/Stacks/PlayDetails';
import FlipCard from '../screens/Stacks/FlipCardPage';
import QuizScreen1 from '../screens/Stacks/QuizScreen1';
import QuizScreen2 from '../screens/Stacks/QuizScreen2';



const DetailsStack = createNativeStackNavigator();



function Details(){
  return(
    <DetailsStack.Navigator >
    <DetailsStack.Screen options={{ 
      headerShown: false,  }} name = "Learn" component = {Learn} />
    <DetailsStack.Screen  options={{ 
      headerShown: false, 
    }}  name = "ShopDetails" component = {ShopDetails} />

    <DetailsStack.Screen options={{ 
      headerShown: false,
      presentation: 'fullScreenModal'
    
      }} name = "Profile" component = {Profile} />

 
      

    </DetailsStack.Navigator>
  )
 }


function Details2(){
  return(
   < DetailsStack.Navigator>
    <DetailsStack.Screen options={{ 
      headerShown: false,  }} name = "Play" component = {PlayScreen} />
    <DetailsStack.Screen options={{ 
      headerShown: false, presentation: 'fullScreenModal'  }} name = "PlayDetails" component = {PlayDetails} />
    <DetailsStack.Screen options={{ 
      headerShown: false, presentation: 'fullScreenModal'  }} name = "FlipCard" component = {FlipCard}/>
    <DetailsStack.Screen options={{ 
      headerShown: false, presentation: 'fullScreenModal'  }} name = "QuizScreen1" component = {QuizScreen1}/>
    <DetailsStack.Screen options={{ 
      headerShown: false, presentation: 'fullScreenModal'  }} name = "QuizScreen2" component = {QuizScreen2}/>
   </DetailsStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();


export default function Navigation() {
  const navigation = useNavigation ();
  return ( 
    <NavigationContainer independent= {true}>
    <Tab.Navigator 
    screenOptions={ ({route}) => ({ 

      headerShown: false,
        tabBarIcon: ({color,focused, size}) => {
         let iconName;
        if (route.name === 'Details2') {
        iconName = focused ? "play-circle" : "play-circle"
       } else if (route.name === 'Search') {
        iconName = focused ? "search" : "search"
       }
       return     <FontAwesome name={iconName} size={23} color={color}  /> ;

        },
     tabBarActiveTintColor : '#007AFF',
     tabBarStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backgroundVisibility: 'transparent',
    },

         
       
    })}  initialRouteName = 'Details2'>
    <Tab.Screen 
    options={ ({route}) => ({
    tabBarIcon: ({color,focused, size}) => {
      let imageSource;
      if (route.name === 'Details') {
        imageSource = focused ? require('../assets/book.png') : require('../assets/book-active.png');
      }
         return  <Image source={imageSource}  tintColor={color} className=' h-[21px]' />;

        },
     tabBarLabel: 'Learn',
  
  
  })}
    name = "Details" component = {Details}/> 
    <Tab.Screen options={{ tabBarLabel: 'Play',}}   name = "Details2" component = { Details2 }/> 
    <Tab.Screen  name = "Search" component = {SearchScreen}/>  
  </Tab.Navigator>

    </NavigationContainer>
  )
}