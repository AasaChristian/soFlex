       
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';



const Nav = ({navigation}) => {
    const goToDashboard = () => navigation.navigate('Dashboard')
  return(
        <View style={styles.nav}>
        <Text style={styles.navText}>Home</Text>
        <TouchableOpacity onPress={goToDashboard}>
            <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        
        <Text style={styles.navText}>Home</Text>
        <Text style={styles.navText}>Home</Text>
        </View> 
  )
}

const styles = StyleSheet.create({
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

export default Nav;
       
       
       
