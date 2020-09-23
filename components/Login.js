
import React from 'react';
import {
  View, Text, StyleSheet, Button, Alert, TouchableOpacity
} from 'react-native';



const Login = () => {

    const onPressLogin = () => Alert.alert('Login button pressed')
    const onPressReg = () => Alert.alert('Register button pressed')
  return(
    <View style={styles.loginView}>
        <View style={styles.login}>
            <TouchableOpacity
            onPress={onPressLogin}
            
            >
            <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.register}>
        <TouchableOpacity
            onPress={onPressReg}
            
            >
            <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    login: {
        height: 290,
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderBottomColor: 'white',
        borderBottomWidth: 40,
        borderTopColor: 'white',
        borderTopWidth: 35
    }, 
    register:{
        height: 290,
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderBottomColor: 'white',
        borderBottomWidth: 50
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