import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import Components
import CredForm from './components/CredForm';
import Head from './components/Head'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Nav from './components/Nav';


const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Head/>
      <Stack.Navigator>
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
        options={{title: null}}
        />
      <Nav/>
      </Stack.Navigator>
      
      
    </NavigationContainer>
    
  )
}

export default App;
