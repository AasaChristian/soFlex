import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Components
import CredForm from './components/CredForm';
import Head from './components/Head'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Nav from './components/Nav';
import ExcDetailCard from './components/ExcDetailCard'
// import { AsyncStorage } from 'react-native';


const Stack = createStackNavigator()

const Routes = () => {
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //    AsyncStorage.getItem('user')
  //   .then(
  //     userString => {
  //       console.log(userString)
  //     }
  //   )
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })

  // if (loading){

  //   return(

  //     <View style={[styles.container, styles.horizontal]}>

  //     <ActivityIndicator size="large" color="#00ff00" />
  //     <ActivityIndicator size="large" color="#00ff00" />
  //   </View>

  //   )
    
  // }
  return(
    <NavigationContainer>
      <Head/>
      <Stack.Navigator >
        <Stack.Screen
        name="Login"
        component={Login}
        options={{title: null}}
        />

        <Stack.Screen
        name="CredForm"
        component={CredForm}
        options={{title: null}}
        
        />

        <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        options={{title: "Login"}}
        />

        <Stack.Screen
        name="ExcDetailCard"
        component={ExcDetailCard}
        options={{title: "ExcDetailCard"}}
        />
      </Stack.Navigator>
      
      
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Routes;
