 import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

 

const BreadDetailsScreen = ({ route }) => {
  const bread = route.params.bread;
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}></Text>
        <Text>{bread.name }</Text>
        <Text>{bread.description }</Text>
        <Text>{bread.weight }</Text>
      </View>
      <Text style={styles.title}>Bread Category</Text>
    </View>
  );
 }
 
export default BreadDetailsScreen;
 
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FF724C',
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontSize:20,
    fontFamily: 'ComfortaaBold',
    marginBottom:10
  }
})