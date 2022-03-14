import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

  

const RestaurantItems = ({navigation,...props}) => {
    return (
       <>
       {props.restaurantData.map((restaurant, index) => ( 
        <View style={{
            padding: 10,
            marginVertical: 10,
            backgroundColor: 'white',
            marginBottom: 20,
        }}
        key={index}
        >
           
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories
            })}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </TouchableOpacity>
        </View>
        ))}
        </> 

        
    )
}

const RestaurantImage = (props) => (
    <>
     <Image 
      source={{uri: props.image}}
      style={styles.img}
     />
    </>
)

const RestaurantInfo =(props) => (
    <>
      <View style={styles.info}>
        <View>
          <Text>{props.name}</Text>
          <Text style={styles.txt}>30-45 • min</Text>
        </View>
        <View style={styles.rating}>
           <Text>{props.rating}</Text>
        </View>
      </View>
    </>
)

export default RestaurantItems

const styles = StyleSheet.create({
    img:{
        width: '100%',
        height: 180,
        borderRadius: 15,
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    txt:{
        fontSize: 13, color: 'gray'
    },
    rating: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
