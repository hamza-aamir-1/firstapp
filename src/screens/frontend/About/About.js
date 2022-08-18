import { Text, View, Button } from 'react-native'
import React from 'react'

export default function About({ navigation }) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{color: 'black', fontSize: 20}}>This is About Page</Text>
      <Button 
        title='Home Page'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}