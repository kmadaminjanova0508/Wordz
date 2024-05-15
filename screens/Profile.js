import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation ();
  return (
    <View className='h-full w-full flex items-center'>
      <Image className="h-full w-full absolute" source={require('../assets/bg-img.png')} />
      <View className='top-[90px] flex-1 bg-white w-full items-center' style={{borderTopLeftRadius:30, borderTopRightRadius:30}}>
       <View className='flex-row mt-2 w-full  p-5 space-x-[120px]'>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
       <AntDesign name="left" width={20} height={20} size={18} color="black" />
       </TouchableOpacity>
       <Text className='leading-[22px] text-[#0085FF] font-semibold text-[17px]'>Profile</Text>
       </View>
       <View className='w-full p-2 flex flex-row gap-4'>
       <Image
              source={require('../assets/alexavatar.jpeg')}
              style={{ width: 80, height: 80, borderRadius: 80, }}
              className =' mb-2'
            />
        <View className='divide-y divide-gray-200   w-[260px] px-1 py-1 rounded-[10px] flex  h-[78px]' style={{backgroundColor: 'rgba(118, 118, 128, 0.12)'}}>
        <View className= 'p-2'>
          <Text className='text-[16px]'>Alex</Text>
        </View>
        <View className='p-2'>
          <Text className='text-[16px]'>Mason</Text>
        </View>
        </View>
       </View>
       <View className="flex justify-center items-center flex-row space-x-3 w-[347px] mt-5 mb-6">
         <View className='flex-1 h-[1px] bg-[#F2F2F7]'></View>
         <Text className='leading-[22px] text-[#0085FF] font-semibold text-[17px]'>Security</Text>
          <View className='flex-1 h-[1px] bg-[#F2F2F7]'></View>
         </View>
         <View className='divide-y divide-gray-200   w-[358px] h-[128px]  rounded-[10px] px-2' style={{backgroundColor: 'rgba(118, 118, 128, 0.12)'}}>
        <View className= 'p-3'>
          <Text className='text-gray-900/60 font-normal text-[15px]'>Current password</Text>
        </View>
        <View className='p-3'>
          <Text className='text-gray-900/60 font-normal text-[15px]'>New password</Text>
        </View>
        <View className='p-3'>
          <Text className='text-gray-900/60 font-normal text-[15px]'>Confirm new password</Text>
        </View>
        </View>
    </View>
    </View>
  )
}