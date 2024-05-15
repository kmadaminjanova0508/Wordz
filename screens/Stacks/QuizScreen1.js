import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import QuizData from '../Data/QuizData';
import { Ionicons } from '@expo/vector-icons';


export default function QuizScreen1() {
    const navigation = useNavigation ();
    const allQuestions = QuizData;
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption,setcorrectOption] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(null)

   

   const validateAnswer = (selectedOption) =>{
     let correct_option = allQuestions[currentQuestion] ['correct_option'];
     setCurrentOptionSelected(selectedOption);
     setcorrectOption(correct_option);
     setIsOptionDisabled(true);
     setTimeout(() => {
        navigation.navigate('QuizScreen2');
    }, 1500);
    
   }
    


    const renderQuestion = () => {
    return (
        <View className=' items-center mt-10'>
            <Text className='text-[#0085FF] font-bold text-[43px]'>{allQuestions[currentQuestion]?.question}</Text>
        </View>
    )
    }


    const renderOptions = () => {
      return (
        <View className='flex flex-wrap justify-center flex-row items-center'>
          {allQuestions[currentQuestion]?.options.map((option) => (
            <View key={option} className=''>
              <TouchableOpacity
                disabled={isOptionDisabled}
                className='mt-4'
                key={option}
                onPress={() => validateAnswer(option)}>
                <View
                  className={`${
                    currentOptionSelected === option
                      ? correctOption === option
                        ? 'bg-green-200 border-green-500'
                        : 'bg-red-200 border-red-500'
                      : correctOption === option
                      ? 'bg-green-200 border-green-500'
                      : currentOptionSelected 
                      ? 'bg-[#E1E1E1] border-[#d1d1d1] opacity-25' 
                      : 'bg-[#E1E1E1] border-[#d1d1d1]' 
                      

                  } w-[173px] rounded-[7px] items-center border mx-1`}>
                  <Text className='font-semibold text-[17px] py-[11px] rounded-[25px] text-[#444444]'>
                    {option}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
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
   <View className='w-[358px] h-[445px] bg-[#CAE5FF] rounded-[25px] items-center ' 
   style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6, 
      }}>
   <Image className='mt-[42px] w-[288px] h-[199px] rounded-[10px] border-[2px] border-[#FFFFFF]' source={require('../../assets/market.png')}/>
   {/* Question */}
   <View className=' flex flex-row space-x-2'>
   <View>
    {renderQuestion()}
   </View>
   <View className='mt-[53px]'>
   <Ionicons name="volume-medium" size={30} color="#00498C" />
   </View>
   </View>
   </View>
    </View> 
  
    <View className='flex mt-8 flex-wrap'>
     {renderOptions()} 
  
      </View>
    
    </SafeAreaView>
  )
}