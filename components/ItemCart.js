import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const ItemCart = ({imageSrc, title, location, data}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
     onPress ={()=>navigation.navigate("ItemScreen", {param:data})}
    className="rounded-md border border-white  py-2 bg-[#aeefd5d0] w-[150px] my-2">
      <Image  
      source={{uri: imageSrc}}
      className="w-full h-40 rounded-md object-cover"/>

     {title &&(
        <>
         <Text className="text-[black] text-[15px] font-semibold">
        {title?.length >14 ? `${title.slice(0,14)}..`:title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={24} color="#8597A2"/>
         <Text className="text-[black] text-[12px] font-semibold">
         {location?.length >14 ? `${location.slice(0,14)}..`:location} 
         </Text>
      </View>
        </>
     )}
    </TouchableOpacity >
  )
}

export default ItemCart