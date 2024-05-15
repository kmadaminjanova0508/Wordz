import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PlayScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView >
    <Image className="h-full w-full absolute" source={require('../assets/pages-bg.png')} />
    <View className='flex flex-row  items-center  w-[100%] justify-between mt-[55px] mb-3 px-4'>
            <Text className='text-[20px] text-white font-semibold'>Hello, Alex!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/alexavatar.jpeg')}
              style={{ width: 35, height: 35, borderRadius: 20, }}
            />
            </TouchableOpacity>
          </View>
    <View className='flex-1 bg-white w-full items-center' style={{borderTopLeftRadius:30, borderTopRightRadius:30}}>
    <View className='p-5'>
    <Text className='text-[13px] font-semibold leading-[18px] text-[#AEAEB2]'>RECENTLY LEARNED</Text> 
    <TouchableOpacity  onPress={() => navigation.navigate('PlayDetails')}>
     <View className='relative mt-4'>
      <Image className='w-[346px] h-[198px]'  source={require('../assets/shopping.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[203px] font-bold text-[22px] text-[#FFFF]'>Shopping</Text>
      </View>
     </View>
     </TouchableOpacity>
     <View className='flex flex-row flex-wrap justify-center gap-2 mt-2'>
     <View className='relative mt-3'>
      <Image className='w-[167.94px] h-[166px]'  source={require('../assets/card1.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[167.94px] font-medium text-[17px] text-[#FFFF]'>Traveling</Text>
      </View>
     </View>
     <View className='relative mt-3'>
      <Image className='w-[167.94px] h-[166px]'  source={require('../assets/card2.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[167.94px] font-medium text-[17px] text-[#FFFF]'>At work</Text>
      </View>
     </View>
 
     <View className='relative mt-3'>
      <Image className='w-[167.94px] h-[166px]'  source={require('../assets/card3.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[167.94px] font-medium text-[17px] text-[#FFFF]'>Messaging</Text>
      </View>
     </View>
 
     <View className='relative mt-3'>
      <Image className='w-[167.94px] h-[166px]'  source={require('../assets/card4.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[167.94px] font-medium text-[17px] text-[#FFFF]'>Adjectives</Text>
      </View>
     </View>
     </View>
     <View className='relative mt-3 '>
      <Image className='w-[167.94px] h-[166px]'  source={require('../assets/card5.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 flex flex-row justify-between'>
      <Text className=' max-w-[167.94px] font-medium text-[17px] text-[#FFFF]'>Vocabulary for shopping</Text>
      </View>
     </View>
 
    </View>
    </View>
    </ScrollView>
  )
}