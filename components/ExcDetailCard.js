
import React, {useState} from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, FlatList,TouchableOpacity
} from 'react-native';
import data from '../ZDummyData'



const ExcDetailCard = () => {
  const username = data.user.Credentials.userName
    console.log(data.user.Credentials.userName, "data")

    const [work, setWork] = useState(data.user.ExerciseH.Standard)

  return(

    <View>
        <Text> Welcome {username}</Text>
        <View style={styles.container}>

          <FlatList
          data={work}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View >
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{item.name}
                </Text>
              </TouchableOpacity>
              
            </View>
          )}
          />

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