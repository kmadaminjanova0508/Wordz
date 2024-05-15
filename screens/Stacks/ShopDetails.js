import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'

export default function ShopDetails() {
  const navigation = useNavigation ();
  return (
    <View>
   <View className='relative    w-[100%] h-[204px]'>
      <Image className='w-[100%] h-[204px] grayscale'  source={require('../../assets/korzinkaplay.png')}/>
       <View className='w-[100%] h-[204px] bg-black/20 absolute'></View>
       <View className='absolute   w-[100%] h-[100%]   px-4 top-[63px] flex flex-row justify-between'>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
      <AntDesign name="leftcircle" size={25} color="rgba(255, 255, 255, 0.75)" />
      </TouchableOpacity>



      </View>
    </View>
   <View>
   <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='flex flex-row items-center'>
        <View className='m-3 mt-5'>
        <Text className='text-[22px] text-[#000000] font-bold '>Shopping</Text>
        <View className='flex flex-row items-center '>
        <Text className='text-[14px] text-[#8E8E93] font-normal'>95 words</Text>
        <Entypo name="dot-single" size={14} color="#8E8E93" />
         <Entypo name="star" size={14} color="rgba(255, 214, 0, 1)" />
         <Entypo name="star" size={14} color="rgba(255, 214, 0, 1)" />
         <Entypo name="star" size={14} color="rgba(255, 214, 0, 1)" />
         <Entypo name="star" size={14} color="rgba(255, 214, 0, 1)" />
        <Entypo name="star" size={14} color="rgba(199, 199, 204, 1)" />
        </View>
        </View>
      </View>  
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[10px]  w-[173px] h-[38px] bg-[#0085FF]  mt-3 mr-3 items-center' >
       <Text className=' text-white text-[13px] font-semibold mt-1.5 '>0.99$</Text>
      </TouchableOpacity>
      </View>
   </View>
   <View className='w-[100%]  flex  mt-5 items-center '>
    <Text className='text-[#636366] w-[348px] text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</Text>
   </View>
  <View className='w-[100%] flex items-center'>
   <View className='w-[346px] items-start flex justify-start mt-8'>
      <Text className='text-[13px] font-semibold text-[#AEAEB2] leading-[18px]'>WE ALSO RECOMMEND</Text>
      
      <View className='mt-3 space-y-4'> 
      <View className = 'flex flex-row  items-center  w-[100%] justify-between '>
      <View className='  w-20 flex flex-row'>
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../../assets/work.png')}/>
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
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../../assets/travell.png')}/>
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
      <Image className='w-[45px] h-[45px] rounded-[10px]' source={require('../../assets/work.png')}/>
        <View className='ml-2 mt-1'>
        <Text className='text-[17px] text-[#000000] font-semibold '>At Work</Text>
        <Text className='text-[13px] text-[#8E8E93] font-normal'>57 words</Text>
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