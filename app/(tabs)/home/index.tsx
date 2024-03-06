import { View, Text } from 'react-native'
import { Container } from 'postcss';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MarketCard from '@/components/marketCard';
import { FlatList } from 'react-native';
import { dummyRestaurantsData } from '@/assets/data/restaurantsData';

const HomeScreen = () => {
  return (
      <SafeAreaView className={styles.container}>
          <View className={styles.header}>
              <View className={styles.addressContainer}>
                  <MaterialCommunityIcons name="map-marker-outline" size={28} color={'black'} />
                  <Text className={styles.addressText}>Your Address Here</Text>
              </View>
          </View>

          <FlatList
              data={dummyRestaurantsData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={() => (
                  <Text className='mt-4 mb-2 text-lg font-bold'>All Restaurants and Stores</Text>
              )}
              renderItem={({item}) => <MarketCard restaurantData = {item} />}
          />
          {/* <MarketCard /> */}
      </SafeAreaView> 
  )
}

export default HomeScreen


const styles = {
    container: 'flex-1 px-4 mt-6 bg-white',
    header: 'flex-row justify-between',
    addressContainer: 'flex-row items-center pb-2',
    addressText: 'ml-2'
}