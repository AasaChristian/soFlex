
import React, { useState } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { color, Value } from 'react-native-reanimated';
import data from '../ZDummyData'



const Head = () => {
  const [userName, setUserName] = useState('')
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserName');
      if (value !== null) {
        setUserName(value)
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const username = data.user.Credentials.userName
  return(
    <View>
      
        <View style={styles.header}>
        <Text style={styles.text}>CoFlex</Text>
        </View>
        <Text style={userName? {color:"red"} : {display:"none"}}> Welcome {username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'powderblue'
    },
    text: {
        textAlign: 'center',
        fontSize: 23

    },
    nav: {
        backgroundColor: 'powderblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 5,
        borderBottomColor: 'skyblue'

    },
    navText: {
        textAlign: 'center',
        fontSize: 18,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
        
        

    },

})

export default Head;