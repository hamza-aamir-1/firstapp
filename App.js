import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/frontend/Home/Home'
import About from './src/screens/frontend/About/About';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>

      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }}
        /> */}
        {/* <Stack.Screen name='About' component={About}
          options={{
            title: 'About Page',
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='About' component={About}/>
      </Tab.Navigator>

      {/* <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='About' component={About}/>
      </Drawer.Navigator> */}

    </NavigationContainer>
  );
}

export default App