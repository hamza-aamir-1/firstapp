import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text style={{color: 'black', fontSize: 20}}>This is Home Page</Text>
      <Button 
        title='About Page'
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

export default Home