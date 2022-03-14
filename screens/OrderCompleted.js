import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native';
import { collection,doc,getDocs,serverTimestamp,setDoc } from 'firebase/firestore'
import { db } from '../firebase';
import MenuItems from '../components/restaurantDetail/MenuItems';




const OrderCompleted = () => {
   
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    
    const total = items.map(
           (item) => Number(item.price.replace('$', ''))).
           reduce((prev,curr)=> prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })  

   

    return (
        <SafeAreaView style={styles.container}>
            {/* green checkmark */}
            <LottieView
               style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
               source={require("../assets/animations/check-mark.json")}
               autoPlay
               speed={0.5}
               loop={false}
             />
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>Your order at {restaurantName} has been placed for {totalUSD}</Text>
            </View>
            

            <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </SafeAreaView>
    )
}

export default OrderCompleted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})
