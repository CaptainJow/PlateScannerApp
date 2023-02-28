import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/HomeScreen/Home';
import SignIn from '../Components/Authentication/SignIn';
import SignUp from '../Components/Authentication/SignUp';
import DrawerSlide from '../Components/HomeScreen/Drawer';

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DrawerSlide} options={{ title: 'Home Screen',headerShown: false }}/>
        {/* <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' ,headerShown: false}}/> */}
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' ,headerShown: false }}/>
    </Stack.Navigator>
    </>
  )
}

export default Routes