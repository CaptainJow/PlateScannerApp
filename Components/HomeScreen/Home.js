import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home screen!</Text>
      <Button title="Go to Sign In" onPress={() => props.navigation.navigate('SignIn')} />
    </View>
  );
}
