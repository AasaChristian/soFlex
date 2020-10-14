
import React, {useState} from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, FlatList,TouchableOpacity
} from 'react-native';
import data from '../ZDummyData'



const ExcDetailCard = ({route}) => {
  const username = data.user.Credentials.userName
    console.log(data.user.Credentials.userName, "data")

    // const [work, setWork] = useState(data.user.ExerciseH.Standard)

  return(

    <View>
        <Text> {route.params.name} </Text>
        <Text> {route.params.weight} </Text>
        <Text> {route.params.sets} </Text>
        <Text> {route.params.reps} </Text>
        <Text> {route.params.key} </Text>
        <Text>Details</Text>
        <View style={styles.container}>


        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
  // container:{
  //   display: 'flex',
  //   justifyContent: 'center'

  // },
  text:{

  },
  list:{
    display: 'flex',
    justifyContent: 'center'

  },
  touch:{
    backgroundColor: "blue",
    padding: 30
  }


})

export default ExcDetailCard;