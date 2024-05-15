
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

export default function LearnScreen() {

const navigation = useNavigation();
  return (
    <ScrollView>
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
    <View className='items-center gap-5'>
    <TouchableOpacity onPress={() => navigation.navigate('ShopDetails')}>
     <View className='relative mt-8'>
      <Image className=''  source={require('../assets/vocab.png')}/>
      <View className='absolute bottom-0 left-0 right-0 bg-opacity-50 p-6 flex flex-row justify-between'>
      <Text className='text-[20px] max-w-[203px] font-semibold text-[#FFFF]'>Vocabulary for shopping</Text>
      <TouchableOpacity className='px-[20px] py-[5px] rounded-[22px]  w-[63px] h-[25px] border-[0.2px] border-[#fff]  mt-5' style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
       <Text className='text-white text-[13px] font-semibold '>Get</Text>
      </TouchableOpacity>
      </View>
     </View>
     </TouchableOpacity>
      <View className='w-[346px] h-[116px] rounded-[14px] bg-[#003261]'>
        <View className='flex flex-row space-x-5 '>
        <Image className='mt-[15px] ml-[18px]' source={require('../assets/carrot.png')}/>
      <View className=' flex items-center w-[166px] h-[68px]'>
       <View className='space-y-2 mt-4 '>
       <View className='flex flex-row space-x-2 items-baseline'>
       <Text className='text-[#D0E9FF] text-[22px] font-medium'>Porkkana</Text>
       <Text className='text-[#789BBB] text-[15px] font-normal'>Carrot</Text>
       </View>
       <Text className='max-w-[204px] w-full text-[10px] text-[#76AEE2]'>Nautimme aina perheenä yhdessä vietetystä ajasta. - We always enjoy spending time together as a family.</Text>
       </View>
       </View>
       {/* iconn */}
       {/* <View  className='relative w-5 h-5 items-start mt-2'>
       <Feather name="arrow-up-right" size={24} color="#5EB1FF" />
       </View> */}
       </View>
      </View>
    </View>
    <View className='w-[346px] items-start flex justify-start mt-8'>
      <Text className='text-[13px] font-semibold text-[#AEAEB2] leading-[18px]'>POPULAR</Text>
      
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
    </ScrollView>

  )
}