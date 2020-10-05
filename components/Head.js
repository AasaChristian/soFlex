
import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import data from '../ZDummyData'



const Head = () => {
  const username = data.user.Credentials.userName
  return(
    <View>
      
        <View style={styles.header}>
        <Text style={styles.text}>CoFlex</Text>
        </View>
        <Text> Welcome {username}</Text>
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