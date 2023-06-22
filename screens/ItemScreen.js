import { View, Text,ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome,FontAwesome5,MaterialIcons} from '@expo/vector-icons';
import Discover from './Discover';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();
    const data = route?.params?.param;
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[]);
  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-white relative  ">
      <ScrollView className="flex-1 px-4 py-4">
          <View className="relative bg-white shadow-lg">
            <Image source={{uri:
                  data?.photo?.images?.large?.url ?
                  data?.photo?.images?.large?.url :
                  "https://media.istockphoto.com/id/1251262272/vector/design-template-404-error-page-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=gmk97cG-aaEz9Ph0XDFsinyEBmxu7PTbvE8G2P6lKPg=" 
                  }}
                  className="w-full h-72 object-cover rounded-2xl"/>

                  <View className="absolute flex-row insert-x-0 top-5 px-6">
                    <TouchableOpacity 
                     onPress={() => navigation.navigate(Discover)}
                    className=" w-10 h-10 rounded-md items-center justify-center bg-white">
                      <FontAwesome name="chevron-left" size={24} color="#06B2BE"/>
                    </TouchableOpacity>

                    <TouchableOpacity className=" w-10 h-10 rounded-md mx-48 items-center justify-center bg-[#06B2BE]">
                    <FontAwesome name="heartbeat" size={24} color="white"/>
                    </TouchableOpacity>
                  </View>

                  <View className="absolute flex-row insert-x-0 top-5 justify-between px-6">
                      <View className="flex-row space-x-2 items-center">
                        <Text className="text-[12px] font-bold text-gray-100">
                          {data?.price_level}
                        </Text>
                        <Text className="text-[25px] align-left font-bold text-gray-100 py-52">
                          {data?.price}
                        </Text>
                  </View> 

                  <View className="w-14 h-5 rounded-md items-center my-56 mx-3 bg-teal-100">
                   <Text>{data?.open_now_text}</Text>
                  </View>
                  </View>
          </View>

          <View className="mt-6">
            <Text className="text-[#428288] text-[21px] font-bold">
              {data?.name}
            </Text>
             <View className="flex-row items-center space-x-2 mt-2">
              <FontAwesome name="map-marker" size={22} color="#8C9EA6"/>
              <Text className="text-[#8C9EA6] text-[20px]">
                {data?.location_string} 
              </Text>
             </View>
          </View>

          <View className="mt-4 flex-row items-center justify-between"> 
          {data?.rating &&(
            <View className="flex-row items-center space-x-2"> 
             <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md"> 
              <FontAwesome name="star" size={24} color="#D58574"/>
             </View>
             <View>
              <Text className="text-[#515151]">{data?.rating}</Text>
              <Text className="text-[#515151]">Ratings</Text>
             </View>
            </View>
          )}

  {data?.price_level &&(
            <View className="flex-row items-center space-x-2"> 
             <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md"> 
             <MaterialIcons name="attach-money" size={24} color="black" />
             </View>
             <View>
              <Text className="text-[#515151]">{data?.price_level}</Text>
              <Text className="text-[#515151]">Price Level</Text>
             </View>
            </View>
          )}

  {data?.bearing &&(
            <View className="flex-row items-center space-x-2"> 
             <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md"> 
             <FontAwesome name="map-signs" size={24} color="black"/>
             </View>
             <View>
              <Text className="text-[#515151] capitalize">{data?.bearing}</Text>
              <Text className="text-[#515151]">Bearing</Text>
             </View>
            </View>
          )}
          </View>

      {data?.description&&(
        <Text className="mt-5 tracking-wide text-[15.5px] font-semibold text-[#97A6AF]">
          {data?.description}
        </Text>
      )}

      {data?.cuisine && (
        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
          {data?.cuisine.map((n)=>(
            <TouchableOpacity
            key ={n.key}
            className="px-2 py-1 rounded-md bg-emerald-100">
              <Text>{n.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
        {data?.phone &&(
        <View className="items-center flex-row space-x-6">
          <FontAwesome name="phone" size={24} color="#428288" />
          <Text className="text-lg"> {data?.phone}</Text>
        </View>
        )}
         {data?.email &&(
        <View className="items-center flex-row space-x-6">
          <FontAwesome name="envelope" size={24} color="#428288" />
          <Text className="text-lg"> {data?.email}</Text>
        </View>
        )}
         {data?.phone &&(
        <View className="items-center flex-row space-x-6">
          <FontAwesome name="map-pin" size={24} color="#428288" />
          <Text className="text-lg"> {data?.address}</Text>
        </View>
        )}

      <View className="bt-4 px-4 py-5 rounded-lg bg-[#06B2BE] items-center mb-12">
          <Text className="text-3xl font-semibold tracking-wider text-gray-100">
            Book Now
          </Text>
      </View>      
      </View>
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ItemScreen