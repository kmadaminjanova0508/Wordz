import { View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'


export default function SignupScreen() {
  const navigation = useNavigation ();
  return (
    <ScrollView>
    <View className="h-full w-full flex items-center">
      <StatusBar style='light'/>
      <Image className="h-full w-full absolute" source={require('../assets/bg-img.png')} />
     <View className='flex flex-row  items-center mt-[55px] w-[227px] left-[65px] space-x-2'>
       <Text className='text-[13px] text-[#BEE8FF] '>Already have an account?</Text>
       <TouchableOpacity className='items-center flex justify-center bg-white/30  rounded-[6px] w-[61px] h-[23px]' onPress={()=> navigation.push('Login')}><Text className='text-white text-[11px] '>Log in</Text></TouchableOpacity>
     </View>
     {/* title and form */}
     <View className='h-full w-full justify-around top-[48px]'>
       {/* title  */}
       <View className='flex items-center'>
        <Text className='text-white font-bold  text-[50px] '>Wordz</Text>
       </View>
       <View className='top-[90px] flex-1 bg-white w-full items-center' style={{borderTopLeftRadius:30, borderTopRightRadius:30}}>
        <View className='items-center content-center flex'>
        <Text className='text-[28px] font-bold mt-10'>Get Started Now</Text>    
        <Text className='text-[17px] font-normal mt-2 text-[#545458]'>Please provide your information</Text>    
        <View className='flex items-center mx-4 space-y-2.5 mt-10'>
        <View className=' bg-[#FCFCFC]  justify-center items-center  w-[346px]  h-[50px] px-3 rounded-[12px]  border  border-slate-200/50 '>
        <TextInput className='text-[20px]  w-[90%] placeholder:text-[17px]'   placeholder="Full name"  placeholderTextColor="rgba(60, 60, 67, 0.6)" />
         </View>
        <View className=' bg-[#FCFCFC]  justify-center items-center  w-[346px]  h-[50px] px-3 rounded-[12px]  border  border-slate-200/50 '>
      <TextInput className='text-[20px]  w-[90%] placeholder:text-[17px]'   placeholder="Email"  placeholderTextColor="rgba(60, 60, 67, 0.6)" />
         </View>
        <View className='m-[15px] bg-[#FCFCFC]  justify-center items-center  w-[346px]  h-[50px] px-3 rounded-[12px]  border  border-slate-200/50 '>
      <TextInput className='text-[20px]  w-[90%] placeholder:text-[17px]'   placeholder="Password"  placeholderTextColor="rgba(60, 60, 67, 0.6)" />
         </View>
         <View className='w-[346px] h-[50px] mb-10 '>
            <TouchableOpacity className='w-full h-full bg-[#00A3FF] rounded-[9px] mb-3' onPress={()=> navigation.push('Navigation')}>
                <Text className='text-xl font-normal text-white text-center mt-3'>Sign up </Text>
            </TouchableOpacity>
         </View>
         <View className="flex justify-center items-center flex-row space-x-2 w-[347px] mb-6">
         <View className='flex-1 h-[2px] bg-[#F2F2F7]'></View>
          <Text className='text-[#D1D1D6]'>OR</Text>
          <View className='flex-1 h-[2px] bg-[#F2F2F7]'></View>
         </View>
         <View className='flex justify-center items-center flex-row space-x-2'>
        {/* apple */}
         <View className='w-[170px] h-[43px]  '>
            <TouchableOpacity className='w-full h-full bg-[#000000] rounded-[9px] flex items-center flex-row justify-center space-x-1'>
            <Image className='w-[12px] h-[15px] flex ' source={require('../assets/apple-icon.png')}/>
            <Text className='font-normal text-white text-center  text-[15px]'>Sign In</Text>
            </TouchableOpacity>
         </View>
         {/* google */}
         <View className='w-[170px] h-[43px]  '>
            <TouchableOpacity className='w-full h-full bg-[#4285F4] rounded-[9px] flex items-center flex-row justify-center space-x-1'>
            <Image className='w-[14px] h-[15px] flex ' source={require('../assets/google.png')}/>
            <Text className='font-normal text-white text-center  text-[15px]'>Sign In</Text>
            </TouchableOpacity>
         </View>
         </View>
        </View>
        </View>
        </View>
     </View>
    </View>
    </ScrollView>
  )
}