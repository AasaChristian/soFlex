
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Button, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard
} from 'react-native';
import { AsyncStorage } from 'react-native';
import { onChange } from 'react-native-reanimated';





const Login = ({ navigation }) => {


    const [user, setUser] = useState("")
// Come back to fix asyncStorage
    // const storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem(
    //         "UserName", `${user}`
    //       );
    //     } catch (error) {
    //       // Error saving data
    //     }
    //   };

    const handleChanges = e => {
        setUser(e.target.value)   }
        console.log(user, "user")

    const onPressLogin = () => navigation.navigate('Dashboard')
    
    const onPressReg = () => Alert.alert('Register button pressed')
  return(

    <View style={styles.GetContainer}>
        <TextInput       
        style={styles.text}
        value={user}
        onChange={text => handleChanges(text)}
        />


        <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.bigTalk}>
                You've Talked Enough!
                    </Text>
                <Text style={styles.bigTalk}>
        Now It's Time To Work!
        </Text>  
            </View>
        
            <TouchableOpacity 
            style={styles.login}
            onPress={onPressLogin}
            >
                <Text 
                style={styles.buttonText}>Lets Get It!
                </Text>
            </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: 350,
        marginLeft: 30,
        borderRadius: 5

    },
        GetContainer: {
            flex: 1,
            backgroundColor: "yellow",
            borderRadius: 5

    }, 
    login: {
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 100

    }, 
    register:{
        height: 30,
        width: 150,
        backgroundColor: 'grey',
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 50

    },

    // buttonText: {
    //     textAlign: 'center',
    //     fontSize: 30,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     marginTop: 5
    // },
    text:{
        backgroundColor: 'red',
        borderRadius: 5
    },
    bigTalk:{
        fontStyle: 'italic',
        color: 'red',
        fontSize: 40
    },
    textView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline'
    }

})

export default Login;