import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import FlipCard from 'react-native-flip-card'
import  { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function FlipCardPage() {
    const navigation = useNavigation ();
   const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <SafeAreaView>
    <View className='mt-5 mx-5 flex flex-row space-x-[120px]'>
     <TouchableOpacity onPress={()=> navigation.goBack()}>
    <Feather  name="chevron-left" size={24} color="black"/>
    </TouchableOpacity>   

    <Text className='mt-1 text-black/50 text-[17px] font-semibold' >Shopping</Text>
    </View>  
     

    <View className='items-center h-[78%]'  >
    <View className='w-[358px] h-[480px] rounded-[25px] bg-[#EBEBEB] mt-[70px] absolute'>
    </View>
    <FlipCard flip={isFlipped} friction={6} perspective={1000} flipHorizontal={true} flipVertical={false} clickable={true}  className='items-center mt-[60px] '>
    <TouchableOpacity className='items-center' onPress={() => setIsFlipped(!isFlipped)}>
    <View className='flex items-center w-[358px] h-[480px] bg-[#CAE5FF] rounded-[25px] mt-2 absolute '  
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6, 
      }}
   >
 
      <Image className='mt-[42px] w-[288px] h-[199px] rounded-[10px] border-[2px] border-[#FFFFFF]' source={require('../../assets/market.png')}/>
      <View className='flex flex-row items-center space-x-1 mt-[48px]'>
        <Text className='text-[43px] font-bold text-[#0085FF]'>Tori </Text>
        <Ionicons name="volume-medium" size={28} color="#00498C" />
      </View>
      <Text className='text-[12px] font-normal text-[#005DB4] mt-[80px]'>Tap to see translation</Text>
    </View>
    <View className='w-[122px] h-[30px] bg-[#004E97] rounded-[70px] '><Text className='text-center mt-1.5 text-[#C3D7EB]'>New</Text></View>
    </TouchableOpacity>
    <TouchableOpacity className='flex items-center w-[358px] h-[480px]  rounded-[25px]'   onPress={() => setIsFlipped(!isFlipped)}>
    <View className='flex items-center w-[358px] h-[480px] bg-[#003668] rounded-[25px] mt-2 absolute '>
     <Text className='text-[#E2F1FF] font-bold text-[43px] top-[54px]'>Market</Text>
  
     <View className='top-[98px] flex flex-col w-[300px] '>
      <View className='flex flex-row space-x-1 '>
      <Text className='text-[#BEE8FF]'>The local</Text>
      <Text className='text-[#BEE8FF] w-[53px] bg-[#53acff3e] px-1'>market</Text>
      <Text className='text-[#BEE8FF]'>is a popular gathering</Text>
      </View>
      <Text className='text-[#BEE8FF]'> place for community members.</Text>
       </View>
    
     <View className='top-[118px] flex flex-col w-[300px] '>
      <View className='flex flex-row  '>
      <Text className='text-[#52ABFF]'>Paikallinen </Text>
      <Text className='text-[#52ABFF] w-[30px] bg-[#53acff3e] px-1'>tori</Text>
      <Text className='text-[#52ABFF] mx-1'>on suosittu</Text>
      </View>
      <Text className='text-[#52ABFF]'>kokoontumispaikka yhteisön jäsenille.</Text>
       </View>

       <Image className='top-[138px]' source={require('../../assets/Separator.png')}/>
       <View className='top-[166px] flex flex-col w-[300px] '>
      <View className='flex flex-row space-x-1 '>
      <Text className='text-[#BEE8FF]'>The local</Text>
      <Text className='text-[#BEE8FF] w-[53px] bg-[#53acff3e] px-1'>market</Text>
      <Text className='text-[#BEE8FF]'>offers fresh produce and</Text>
      </View>
      <Text className='text-[#BEE8FF]'> handmade goods.</Text>
       </View>
      <View className='top-[185px] flex flex-col w-[300px] '>


      <View className='flex flex-row  '>
      <Text className='text-[#52ABFF]'>Paikalliset  </Text>
      <Text className='text-[#52ABFF] w-[35px] bg-[#53acff3e] px-1'>torit</Text>
      <Text className='text-[#52ABFF] mx-1'>arjoavat tuoretuotteita</Text>
      </View>
      <Text className='text-[#52ABFF]'>ja käsintehtyjä tuotteita.</Text>

      <Text className='text-center mt-14 text-[#007FF3]'>Tap to hide translation</Text>
       </View>
      
    </View>
  

 
    <View className='w-[122px] h-[30px] bg-[#004E97] rounded-[70px] '><Text className='text-center mt-1.5 text-[#C3D7EB]'>New</Text></View>
    </TouchableOpacity>



   </FlipCard>
 
   </View>
   


   <View className='flex-row flex justify-between relative mt-3 p-3 items-center '>
  <View className='flex flex-row space-x-2'>
  <MaterialCommunityIcons name="arrow-u-left-top" size={24} color="#919194" />
    <Text className='mt-1 text-[#919194]'>Repeat</Text>
  </View>
  <View className='flex flex-row space-x-2'>
  <MaterialCommunityIcons name="arrow-u-right-top" size={24} color="#919194" />
    <Text className='mt-1 text-[#919194]'>Next</Text>
  </View>
   </View>
    </SafeAreaView>
  )
}