import { View, Text,Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Attractions, Avatar,Hotels, NotFound, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import {FontAwesome} from '@expo/vector-icons'
import ItemCart from '../components/ItemCart';
import { getPlaceData } from '../api';

const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false); 
    const [mainData,setMainData] = useState([]); 
    const[bl_lat, setBl_lat] = useState(null);
    const[bl_lng, setBl_lng ] = useState(null);
    const[tr_lat, setTr_lat] = useState(null);
    const[tr_lng, setTr_lng ] = useState(null);
  
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

    useEffect(()=>{
      setIsLoading(true);
      getPlaceData(bl_lat, bl_lng, tr_lat, tr_lng,type).then((data)=> {
        setMainData(data);
        setInterval(()=>{
          setIsLoading(false);
        },2000);
      });  
    },[bl_lat, bl_lng, tr_lat, tr_lng,type]);
  return (
    <SafeAreaProvider>
    <SafeAreaView className = "bg-white flex-1 relative">
    <View className="flex-row items-center justify-between px-8">
      <View>
           <Text className="text-[40px] text-[#226166] font-bold shadow-md">Discover</Text>
           <Text className="text-[#3c7c9e] text-[38px] ">destinations</Text>
      </View>


      <Animatable.View animation="pulse" easing ="ease-in-out" className="w-20 h-20 bg-[#0f553b] rounded-full items-center justify-center">
      <View className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg">
        <Image source={Avatar} className="w-16 h-16 rounded-md object-cover"/>
      </View>
    </Animatable.View>
    </View>


    <View className="flex-row items-center bg-[#090d0b] mx-4 rounded-xl py-1 px-4 mt-4">
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{fields: "geometry"}}
      placeholder='Search'
      fetchDetails = {true} 
      onPress={(data, details = null) => {
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport.southwest?.lat)
        setBl_lng(details?.geometry?.viewport.southwest?.lng)
        setTr_lat(details?.geometry?.viewport.northeast?.lat)
        setTr_lng(details?.geometry?.viewport.northeast?.lng)
      }}
      query={{
        key: 'AIzaSyDZ3i_YgFw63PkdZ0-DIpJXj0X50TxeaRs',
        language: 'en',
      }}
    />
    </View>


    {/*Menu Container*/}
    {isLoading ?<View className="flex-1 items-center justify-center"> 
        <ActivityIndicator size="large" color="#0000ff"/>
    </View> :
    <ScrollView> 
      <View className="flex-row items-center justify-between  px-8 mt-8 ">
        <MenuContainer 
          key ={"hotels"}
          title ="Hotels"
          imageSrc = {Hotels}
          type = {type}
          setType = {setType}
        />

        <MenuContainer 
          key ={"attractions"}
          title ="Attractions"
          imageSrc = {Attractions}
          type = {type}
          setType = {setType}
        />

        <MenuContainer 
          key ={"restaurants"}
          title ="Restaurants"
          imageSrc = {Restaurants}
          type = {type}
          setType = {setType}
        />
      </View>

  
      <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-cyan-700 text-[17px] font-bold"> Top tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-1">
              <Text className="text-cyan-700 text-[17px] font-bold"> Explore </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C8C5"/>
            </TouchableOpacity>
          </View>

      
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
             {mainData?.length > 0 ?(
              <>
                 {mainData?.map((data,i) =>(
                   <ItemCart 
                      key ={i}
                      imageSrc ={
                        data?.photo?.images?.medium?.url ?
                        data?.photo?.images?.medium?.url :
                        "https://media.istockphoto.com/id/1251262272/vector/design-template-404-error-page-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=gmk97cG-aaEz9Ph0XDFsinyEBmxu7PTbvE8G2P6lKPg="
                      }
                      title = {data?.name}
                      location = {data?.location_string}
                      data ={data}
                   />
                 ))}
              </>
             ):(
              <> 
                <View className="w-full h-[350px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="h-32 w-32 object-cover"/>
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Oops... No Data Found
                  </Text>
                </View>
              </>
             )} 
          </View>
      </View>
    </ScrollView>
} 
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Discover