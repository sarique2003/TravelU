import { Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';
import Discover from './Discover';



const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

  return (
    <SafeAreaProvider>
    <SafeAreaView className ="bg-white flex-1">
      {/*FIrst Section */}
       <View className="flex-row px-6 mt-8 items-center space-x-2 pl-8">
        <View className ="w-16 h-16 bg-black rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-2xl font-semibold">Find</Text>
        </View>

           <Text className="text-[#2A2B4B] text-2xl font-semibold">Travel</Text>
       </View>

      {/*Second Section */}
       <View className="px-6 mt-8 space-y-3"> 
        <Text className = "text-[#3C6072] text-[35px]"> Enjoy your trip of</Text>
        <Text className = "text-[#00BCC9] text-[35px] font-bold pl-2">Good Moments</Text>
        <Text className = "text-[#706767] font-light pl-2"> It has been believed since ages that travel is a form of therapy.We got you covered with us.</Text>
      </View>

      {/*Circle Section */}
      <View className="w-[330px] h-[330px] bg-[#00BCC9] rounded-full absolute bottom-14 -right-32"></View>
      <View className="w-[330px] h-[330px] bg-[#d18fd6] rounded-full absolute -bottom-14 -left-44"></View>

      {/*Image container */}
      <View className="flex-1 relative items-center justify-center bottom-6 top-4">
        <Animatable.Image  animation="pulse" easing ="ease-in-out" 
         source={HeroImage} className="w-full h-full object-cover mt-8"/>

      <TouchableOpacity 
       onPress={()=> navigation.navigate(Discover)}
      className="absolute bottom-20 w-24 h-24 left-28 border-l-2 border-r-2 border-t-4 border-[#020e0f]
      rounded-full items-center justify-center">
        <Animatable.View animation="pulse" easing ="ease-in-out"  className="w-20 h-20 items-center justfiy-center rounded-full bg-[#020e0f]">
            <Text className=" text-white font-bold text-[25px] top-5">Go</Text>
        </Animatable.View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomeScreen