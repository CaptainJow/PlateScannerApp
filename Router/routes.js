import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/HomeScreen/Home';
import SignIn from '../Components/Authentication/SignIn';
import SignUp from '../Components/Authentication/SignUp';

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' ,headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' ,headerShown: false }}/>
    </Stack.Navigator>
    </>
  )
}

export default Routes