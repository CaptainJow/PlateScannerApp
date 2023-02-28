// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Router/routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
            <Routes/>
        </NativeBaseProvider>
      </NavigationContainer>
  );
}

