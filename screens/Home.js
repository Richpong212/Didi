import React,{useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'

const Home = ({navigation}) => {
     const [restaurantData, setRestaurantData] = useState(localRestaurants);

    return (
        <SafeAreaView style={styles.container}>
           <ScrollView>
              <Categories />
              <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc'
    },
})
