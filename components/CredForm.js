
import React, {useState} from 'react';
import {
  View, Text, StyleSheet, TextInput
} from 'react-native';



const CredForm = ({navigation}) => {

  const [creds, setCreds] = useState([{
    email: '',
    password: ''
  }])
  console.log(creds, "creds")

  const submitForm = () => navigation.navigate('Dashboard')
  return(
    <View>
        <View style={styles.inputView}>
          <TextInput
          placeholder={'Enter your Email Address'}
          value={creds.email}
          style ={styles.inputText}
          onChangeText={text => setCreds(text)}
          />

        </View>
      
        <View style={styles.inputView}>

        <TextInput
          placeholder='Enter your Password'
          value={creds.password}
          style ={styles.inputText}
          onChangeText={text => setCreds(text)}
          onSubmitEditing={submitForm}
          />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputView:{
    height: 100,
    backgroundColor: 'grey'
    
  },
  inputText:{
    textAlign: 'center',
    fontSize: 30,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  }
    

})

export default CredForm;