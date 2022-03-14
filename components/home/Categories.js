import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
    return (
      <View style={{
          marginTop: 5,
          backgroundColor: 'white',
          padding: 10,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
          <TouchableOpacity key={index} >    
           <View style={styles.container}> 
           <View style={styles.imgContainer}>
            <Image 
              source={item.image}
              style={styles.img}
            />
            </View>
            <Text>{item.text}</Text>
          </View>
         </TouchableOpacity> 
        ))}
        </ScrollView>
      </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    img:{
        height: 50,
        width: 50,
    },
    container: {
        alignItems: 'center',
        marginHorizontal: 20
    },
    imgContainer: {
        borderRadius: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
    }
})
