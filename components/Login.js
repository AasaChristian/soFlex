
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard
} from 'react-native';

import { onChange } from 'react-native-reanimated';





const Login = ({ navigation }) => {
    const [user, setUser] = useState("whatever")

    const handleChanges = e => {
        setUser(e.target.value)   }
        console.log(user, "user")

    // const onPressLogin = () => navigation.navigate('CredForm')
    const onPressLogin = () => navigation.navigate('Dashboard')
    const onPressReg = () => Alert.alert('Register button pressed')
  return(

    <View style={styles.loginView}>
        <TextInput       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={user}
        onChange={text => handleChanges(text)}

        />
        <View style={styles.container}>
            <TouchableOpacity style={styles.login}
            
            onPress={onPressLogin}
            
            >
            <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <View >
        <TouchableOpacity style={styles.register}
            onPress={onPressReg}
            
            >
            <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    login: {
        height: 100,
        width: 150,
        backgroundColor: 'grey',
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50

    }, 
    register:{
        height: 100,
        width: 150,
        backgroundColor: 'grey',
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,
        marginTop: 20

    },
    loginView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'

    }, 

    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    }

})

export default Login;