import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from './screens/OrderCompleted';
import Login from './screens/AuthScreens/Login';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';


const Stack = createStackNavigator();
const store = configureStore();


const RootNavigation = () => {
    const [user, setUser] = useState(false)

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(true)
            }
        })
        return unsubscribe
     }, [])

    return (
        <ReduxProvider store={store}>
        <NavigationContainer>
             { user ? <MainAppNav /> :
                <AuthNav />
             }
        </NavigationContainer>
        </ReduxProvider>
    )
}

export default RootNavigation

const MainAppNav = () => (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
        <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
    </Stack.Navigator>
)


const AuthNav = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
)
