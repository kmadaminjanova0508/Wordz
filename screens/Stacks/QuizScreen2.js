import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState,useEffect } from 'react'


export default function QuizScreen2() {
  const navigation = useNavigation ();
  const [button2Visible, setButton2Visible] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


  

    const handleButton1Click = () => {
        setButton2Visible(false);
        setInputFocused(true); 
        setButton2Clicked(false);
        setShowCorrectAnswer(false); 
        setTimeout(() => {
            navigation.navigate('QuizScreen1');
        }, 1500);
        
    };
    const handleButton2Click = () => {
        setButton2Clicked(!button2Clicked); 
        setShowCorrectAnswer(true);
        setTimeout(() => {
            navigation.navigate('QuizScreen1');
        }, 1500);
    };
   



  return (
    <SafeAreaView>
    <View className='mt-5 mx-5 flex flex-row space-x-[115px] '>
     <TouchableOpacity onPress={()=> navigation.goBack()}>
    <Feather  name="chevron-left" size={24} color="black"/>
    </TouchableOpacity>   

    <Text className='text-center  mt-1 text-black/50 text-[17px] font-semibold' >Shopping</Text>
    </View> 
    <View className='items-center mt-[36px]'>
    <View className='w-[358px] h-[445px] bg-[#CAE5FF] rounded-[25px] items-center'  
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
    <View className='mt-[53px] flex-row items-center'>
        <Text className='text-[#0085FF] font-bold text-[43px]'>Tori 2</Text>
      <Ionicons name="volume-medium" size={30} color="#00498C" />
     </View>
    </View>
    </View>
    <View className='flex-row mt-[30px]'>
     <View>  
    <View
                    className="mx-[15px] mt-4 justify-start items-center flex-row w-[290px] h-[52px] px-3 rounded-[12px]"
                    style={{
                        backgroundColor: button2Clicked ? 'rgba(255, 0, 0, 0.12)' : inputFocused ? 'rgba(0, 128, 0, 0.12)' : 'rgba(118, 118, 128, 0.12)',
                        borderWidth: button2Clicked ? 1 : inputFocused ? 1 : 0, // Border is set only when button2Clicked is true or when input is focused
                        borderColor: button2Clicked ? '#FF0000' : inputFocused ? '#008000' : 'transparent', // Border color is applied only when button2Clicked is true, or when input is focused
                    }}
                >
                    <TextInput
                        className="text-[20px] ml-[10px] w-[90%] placeholder:text-[17px] "
                        placeholder="Answer"
                        placeholderTextColor="#000000"
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                    />
                   
                </View>
                   {showCorrectAnswer && (
                        <Text className="text-[12px] text-[#676767] mx-[18px] mt-2">Correct answer: Market</Text>
                    )}
                </View> 
         <View className='flex-col space-y-2 items-center mt-[16px]'>
         <TouchableOpacity onPress={handleButton1Click}>
                        <View className=' items-center w-[62px] h-[51px] bg-[#0085FF] flex justify-center rounded-[7px]'>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    {/* Btn 2 */}
                    {button2Visible && (
                        <TouchableOpacity onPress={handleButton2Click}>
                            <View className=' items-center w-[62px] h-[51px] bg-[#0085FF] justify-center rounded-[7px]'>
                                <AntDesign name="arrowright" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    )}
    </View>

      </View>
      <View>
      
      </View>
    </SafeAreaView>
  )
}