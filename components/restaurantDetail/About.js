import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://blog.doemal.com/en/wp-content/uploads/sites/2/2019/03/Features-1.jpg',
    price: '$$',
    reviews: '1500',
    rating: 4.5,
    categories: [{title: 'Indian'}, {title: 'Comfort Food'}],
}



const About = (props) => {
    const { name, image, price,reviews, rating, categories } =
    props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = ` ${formattedCategories} ${
        price ? " • " + price : ""
      } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image}/> 
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image 
      source={{uri:props.image}}
      style={styles.img}
    />
)

const RestaurantName = (props) => (
   <Text style={styles.title}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
   <Text style={styles.description}>{props.description}</Text>
)


export default About

const styles = StyleSheet.create({
    img:{
        height: 180,
        width: '100%'
    },
    title:{
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
        marginHorizontal: 15,
    },
    description: {
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.3
    },
})
