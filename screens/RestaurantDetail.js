import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg',
    },
    {
        title: 'Burger',
        description: 'burger King, with beef sauce',
        price: '$15.50',
        image: 'https://assets.bonappetit.com/photos/5952b45c76350d51feba80c4/master/pass/Classic%20Burger.JPG',
    },
    {
        title: 'Yam',
        description: 'Yam Fries and Chicken',
        price: '$10.50',
        image: 'https://i.pinimg.com/736x/a9/00/61/a9006164b96716e25d3f8b81af939f41.jpg',
    },
    {
        title: 'Burger',
        description: 'burger King, with beef sauce',
        price: '$20.50',
        image: 'https://assets.bonappetit.com/photos/5952b45c76350d51feba80c4/master/pass/Classic%20Burger.JPG',
    },
    {
        title: 'Waakyei',
        description: 'Waakyei and Chicken with gari',
        price: '$10.50',
        image: 'https://images.squarespace-cdn.com/content/v1/5b83caf5cef3722f754f33be/1546334929558-2QU52HFC57MDBIUC2P2I/bowl+waakye6.JPG?format=2500w',
    },
]


const RestaurantDetail = ({route, navigation}) => {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItems restaurantName={route.params.name}  foods = {foods}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({})
