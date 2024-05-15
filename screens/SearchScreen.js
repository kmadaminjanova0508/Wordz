import { View, Text, Image, TextInput ,TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'

export default function SearchScreen() {
  const navigation = useNavigation();
  return (
    <View className='w-full h-full items-center'>
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
    <View className='m-[15px] mt-[30px] justify-start items-center flex-row w-[346px]  h-[36px] px-3 rounded-[12px] '   style={{backgroundColor: 'rgba(118, 118, 128, 0.12)'}}>
      
    <Fontisto name="search" size={17} color="rgba(60, 60, 67, 0.6)" style={{ marginLeft: 1 }}/>
    <TextInput className='text-[20px] ml-[10px] w-[90%] placeholder:text-[17px]'   placeholder="Search"  placeholderTextColor="rgba(60, 60, 67, 0.6)" />
    </View>
    <View className='w-[346px] divide-y divide-gray-200  mt-2'>
  <View className='py-2 '>
  <Text className='text-[#0085FF] text-[17px] font-medium'>travel</Text>
  </View>
  <View className='py-2 '>
  <Text className='text-[#0085FF] text-[17px] font-medium'>shopping</Text>
  </View>
  <View className='py-2 '>
  <Text className='text-[#0085FF] text-[17px] font-medium'>for work</Text>
  </View>
  <View className='py-2 '>
  <Text className='text-[#0085FF] text-[17px] font-medium'>verbs</Text>
  </View>
  <View className='py-2 '>
  <Text className='text-[#0085FF] text-[17px] font-medium'>Spanish</Text>
  </View>

 
    </View>
    <View className='w-[346px] items-start flex justify-start mt-5'>
      <Text className='text-[13px] font-semibold text-[#AEAEB2] leading-[18px]'>SUGGESTED</Text>
      
      <View className='mt-3 space-y-4'> 
      <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='  w-20 flex flex-row'>
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../assets/work.png')}/>
        <View className='ml-2 mt-1'>
        <Text className='text-[17px] text-[#000000] font-semibold '>At Work</Text>
        <Text className='text-[13px] text-[#8E8E93] font-normal'>57 words</Text>
        </View>
      </View>  
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[22px]  w-[63px] h-[28px]   mt-3' style={{backgroundColor: 'rgba(99, 180, 255, 0.3)'}}>
       <Text className='text-[#0085FF] text-[13px] font-semibold '>Get</Text>
      </TouchableOpacity>
      </View>
      <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='  w-20 flex flex-row'>
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../assets/travell.png')}/>
        <View className='ml-2 mt-1'>
        <Text className='w-[80px] text-[17px] text-[#000000] font-semibold '>Traveling</Text>
        <Text className='text-[13px] text-[#8E8E93] font-normal'>95 words</Text>
        </View>
      </View>  
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[22px]  w-[63px] h-[28px]   mt-3' style={{backgroundColor: 'rgba(99, 180, 255, 0.3)'}}>
       <Text className='text-[#0085FF] text-[13px] font-semibold '>Get</Text>
      </TouchableOpacity>
      </View>
      <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='  w-20 flex flex-row'>
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../assets/work.png')}/>
        <View className='ml-2 mt-1'>
        <Text className='text-[17px] text-[#000000] font-semibold '>At Work</Text>
        <Text className='text-[13px] text-[#8E8E93] font-normal'>57 words</Text>
        </View>
      </View>  
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[22px]  w-[63px] h-[28px]   mt-3' style={{backgroundColor: 'rgba(99, 180, 255, 0.3)'}}>
       <Text className='text-[#0085FF] text-[13px] font-semibold '>Get</Text>
      </TouchableOpacity>
      </View>
      <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='  w-20 flex flex-row'>
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../assets/travell.png')}/>
        <View className='ml-2 mt-1'>
        <Text className='w-[80px] text-[17px] text-[#000000] font-semibold '>Traveling</Text>
        <Text className='text-[13px] text-[#8E8E93] font-normal'>95 words</Text>
        </View>
      </View>  
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[22px]  w-[63px] h-[28px]   mt-3' style={{backgroundColor: 'rgba(99, 180, 255, 0.3)'}}>
       <Text className='text-[#0085FF] text-[13px] font-semibold '>Get</Text>
      </TouchableOpacity>
      </View>
      

      </View>

     </View>
    </View>
  
    </View>
  )
}