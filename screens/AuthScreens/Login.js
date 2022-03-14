import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const RegisterUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((resultsback) => {
            console.log(resultsback);
        })
        .catch((resultsback)=> {
            console.log(resultsback)
        })
    }

    const LoginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged In with:', user.email)
        })
        .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headTxtContainer}>
                <Text style={styles.headTxt}>Sign In</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder='E-mail'
                  style={styles.textInput}
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
                <TextInput 
                  placeholder='Password'
                  style={styles.textInput}
                  secureTextEntry
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
             </View>  
             <Button 
                  title='Log In'
                  buttonStyle={styles.btn}
                  onPress={LoginUser}
                />
              <Text style={styles.or}>OR</Text>
              <Button 
                  title='Sign Up'
                  buttonStyle={styles.btn}
                  onPress={RegisterUser}
                />
                <View style={{
                    position: 'absolute',
                    bottom: -300
                }}>
                   <Text>By creating an account you agree with our</Text> 
                   <TouchableOpacity 
                      style={styles.termsbtn}
                   >
                       <Text style={styles.term}>Terms of Use</Text>
                   </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headTxtContainer: {
        marginHorizontal: 25,
        marginVertical: 25,
    },
    headTxt: {
        fontSize: 25,
        color: '#24d453',
        fontWeight: '700'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 350,
        borderWidth: 1,
        padding: 15,
        borderRadius: 30,
        borderColor: '#c1c2c0',
        fontSize: 20,
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#0a6e1a',
        width: 200,
        borderRadius: 30,
        marginVertical: 20,
    },
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    or:{
        marginVertical: 10,
        fontSize: 20,
    },
    termsbtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    term:{
        color: 'blue'
    },
})
