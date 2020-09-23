
import React from 'react';
import {
  View, Text, StyleSheet, TextInput
} from 'react-native';



const CredForm = () => {
  return(
    <View>
        <View style={styles.inputView}>
          <TextInput
          placeholder={'Enter your Email Address'}
          />

        </View>
      
        <View style={styles.inputView}>

        <TextInput
          placeholder='Enter your Password'
          />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputView:{
    height: 100,
    backgroundColor: 'grey'
    
  }
    

})

export default CredForm;