import { View, Text, Image, SectionList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import Animated from 'react-native-reanimated'

const RestaurantDetails = ({ post }) => {
  const navigation = useNavigation();

  const ratingStyle = {
    color: post.rating < 4.5 ? 'black' : '#FF8C00'
  }

  // useLayoutEffect()

  const data = post.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index
  }))

  const renderItem = ({ item, index }) => (

    <TouchableOpacity className='flex flex-row justify-between my-2 items-center'>
      <View className='flex flex-1 my-4 mr-8 '>
        <Text className='text-base'>{item.name}</Text>
        <Text className='text-sm text-[#6e6d72]'>{item.info}</Text>
        <Text className='text-base'>$ {item.price}</Text>

      </View>
      <Image source={{ uri: item.img }}
        className='w-28 h-27 rounded-sm'
        resizeMode='contain' 
        width={100}
        height={100}
      />

    </TouchableOpacity>
  )




  return (
    <>
    <ScrollView>
      <Image 
        source = {{ uri: post.profileImage }}
        className='w-full h-[200px]'
        resizeMode='cover'
      />

      <View className='flex rounded-2xl -mt-12 bg-white'>
        <View className='m-6'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-2xl font-bold text-[#2e303d]'>{post.name}</Text>
            <View className='flex flex-row items-center'>
              <FontAwesome name='star' size={17} color={ratingStyle.color} /> 
              <Text className='ml-1 font-bold text-base'>{post.rating}</Text>
            </View>
          </View>
          <View className='flex flex-row items-center'>
            <Ionicons name='bicycle' size={18} color={'black'} />
            <Text className='text-sm ml-1 text-[#2e303d]'>Delivery</Text>
            <Text>'</Text>
            <FontAwesome5 name ="walking" size = {15} color = "black" />
            <Text className='text-sm ml-1 text-[#2e303d]'>PickUp</Text>
            <Text>'</Text>
            <Text className='text-sm font-bold'> More Info </Text>
            <AntDesign name='right' size={14} color={'black'} 
              className=''
            />

          </View>
          <View className='h-[0.5px] bg-slate-300 my-4' />
          <Text className='text-sm ml-1 text-[#2e303d]'>{post.about}</Text>
        </View>

        <View className='flex bg-white mt-2 rounded-t-2xl'>
          <View className='m-6'>
            <SectionList sections={data} scrollEnabled={false}
              keyExtractor={(item, index) => `${item.id + index}`}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View className='border[.5px] border-slate-300' />}
              SectionSeparatorComponent={() => <View className='border[.5px] border-slate-300' />}
              renderSectionHeader={({ section: { title, index } }) => (
                <Text className='text-2xl font-bold text-[#2e303d] my-4'>{title}</Text>
              )}
            />
          </View>

        </View>
      </View>
      </ScrollView>


      {/* <Animated.View>
        <View className='justify-center pt-2 bg-white'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              alignItems: 'center',
              gap: 10
            }}
          >
            {
              post.food.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Text>{item.category}</Text>
                </TouchableOpacity>
              )
              )
}
          </ScrollView>

        </View>
      </Animated.View> */}
    </>
  )
}

export default RestaurantDetails