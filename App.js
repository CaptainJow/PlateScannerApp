// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Router/routes';


export default function App() {
  return (
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
  );
}

