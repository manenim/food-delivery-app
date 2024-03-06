import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dummyRestaurantsData } from '@/assets/data/restaurantsData'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const MarketCard = ({ restaurantData }: any) => {
    const ratingStyle = {
        color: restaurantData.rating < 4.5 ? 'black' : '#FF8C00'
    }
    return (
      <Link href={{ pathname: `${restaurantData.id}`}} asChild>
      
        <Pressable className='mt-5'>
            <View>
                <Image 
                    source={{
                        uri: restaurantData.profileImage,
                    }}
                    //   style={{ width: 100, height: 400 }}
                    className='w-full h-[180px] rounded-md'
                    //   style={styles.cardImage}
                    resizeMode='cover'
                />
                <View className='absolute bg-white rounded-sm bottom-2 right-2'>
                    <Text className='text-sm font-semibold py-1 px-2'>{restaurantData.delivery} min</Text>
                </View>
            </View>

            <View className='flex flex-row items-center justify-between'>
                <Text className='text-base font-bold mt-2 text-[#2e303d]'>{restaurantData.name}</Text>
                <View className='flex flex-row items-center'>
                    <FontAwesome name="star" size={17} color={ ratingStyle.color } />
                    <Text className='mt-1 ml-1 font-bold text-base'>{restaurantData.rating}</Text>
                </View>
            </View>
            <Text className='text-sm font-[#6e6d72]'>$ {restaurantData.price}</Text>
        </Pressable>
      </Link>
  )
}

export default MarketCard

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 30
    }
})

const twStyles = {
    overlay: 'absolute bg-white rounded-sm bottom-2 right-2'
}