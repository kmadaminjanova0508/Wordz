import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';







export default function PlayDetails() {
    const navigation = useNavigation ();
    const [isClicked,SetIsClicked] = useState(false);
    const leftSwipe = () =>{
     return(
      <View className='flex flex-row w-[150px] '>
       <TouchableOpacity className=' w-[72px] items-center justify-center bg-red-500'>
       <Ionicons name="trash-outline" size={18} color="white"  />
       </TouchableOpacity>
       <TouchableOpacity className=' w-[72px] items-center justify-center bg-[#8E8E93]'>
       <Ionicons name="pencil-sharp" size={18} color="white" />
       </TouchableOpacity>
     
      </View>
     )
    }
    const navigateToFlipCard = () => {
      navigation.navigate("FlipCard"); 
  };
    const navigateToQuizScreen1 = () => {
      navigation.navigate("QuizScreen1"); 
  };
  return (
  <GestureHandlerRootView>
    <View>
   <View className='relative    w-[100%] h-[204px]'>
      <Image className='w-[100%] h-[204px] grayscale'  source={require('../../assets/korzinkaplay.png')}/>
       <View className='w-[100%] h-[204px] bg-black/20 absolute'></View>
       <View className='absolute   w-[100%] h-[100%]   px-4 top-[63px] flex flex-row justify-between'>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
      <AntDesign name="leftcircle" size={25} color="rgba(255, 255, 255, 0.75)" />
      </TouchableOpacity >
      <View className="flex flex-col items-end">
      <TouchableOpacity onPress={()=>SetIsClicked(!isClicked)}>
      <Ionicons name="ellipsis-horizontal-circle" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      {isClicked ? <View className="bg-[#ffff] w-[250px] h-[88px] mt-2 rounded-[12px] divide-y divide-gray-200">
      <View className= 'p-3 flex flex-row justify-between'>
          <Text className='text-[16px]'>Edit list</Text>
          <Ionicons name="pencil-sharp" size={18} color="black" />
        </View>
      <View className= 'p-3 flex flex-row justify-between'>
          <Text className='text-[16px] text-red-600'>Delete</Text>
          <Ionicons name="trash-outline" size={18} color="red" />
        </View>
 
      </View> : null}
    
      </View>
      </View>
    </View>
   <View>

      <View className='flex flex-row items-center'>
        <View className='mx-3 mt-5 flex flex-row w-[90%]  justify-between '>
        <Text className='text-[22px] text-[#FF7A00] font-bold '>Shopping</Text>
        <View className='flex flex-row space-x-8'>
        <TouchableOpacity  onPress={navigateToQuizScreen1}>
        <Ionicons name="play-outline" size={28} color="#707070" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToFlipCard}>
        <Image source={require('../../assets/notebook_ic.png')} size={20} className='mt-[1.5px]'
            />
        </TouchableOpacity>

        </View>
        </View>
      </View>  
      <ScrollView className='divide-y divide-gray-200  mt-8'>


      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal '>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
    <View className='mx-3'></View>
   
     <Swipeable renderLeftActions={leftSwipe}>
      <View className='flex-col space-y-1 mx-3'>
    
       <Text className='text-[17px] font-normal mt-3'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] mb-2 '>Translation</Text>
      
      </View>
      </Swipeable>

      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
      <View className='mx-3 flex-col space-y-1 mb-2'>
       <Text className='text-[17px] font-normal mt-2'>Word</Text>
       <Text className='text-[12px] text-[#3C3C43] '>Translation</Text>
      </View>
   
     
 

      </ScrollView>
    
      </View>


  </View>
  </GestureHandlerRootView>
  )
}