import React from 'react';
import {
  View, Text
} from 'react-native';
import CredForm from './components/CredForm';
import Head from './components/Head'
import Login from './components/Login'



const App = () => {
  return(
    <View>
      <Head/>
      {/* <Login/> */}
      <CredForm/>
    </View>
  )
}

export default App;
