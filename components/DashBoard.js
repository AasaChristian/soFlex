
import React, {useState} from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, FlatList,TouchableOpacity
} from 'react-native';
import data from '../ZDummyData'


const DashBoard = ({navigation}) => {
    console.log(data.user.Credentials.userName, "data")
    // console.log(props, "props")
    const [work, setWork] = useState(data.user.ExerciseH.Standard)

  return(

    <View>
        <View style={styles.container}>

          <FlatList
          data={work}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View >
              <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                navigation.navigate('ExcDetailCard', {
                  name: item.name,
                  weight: item.weight,
                  sets: item.sets,
                  reps: item.reps,
                  key: item.key

                })
              }}
              >
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
    fontSize: 30

  },
  list:{
    display: 'flex',
    justifyContent: 'center'

  },
  touch:{
    borderWidth: 15,
    borderColor: "white",
    backgroundColor: "blue",
    padding: 30,
    borderRadius: 30
  }


})

export default DashBoard;