import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mypostcard from './mycardcomponent';

export default function App() {
  return (
    <View>
      <Mypostcard/>
      <Mypostcard/>
      <Mypostcard/>
    </View>

  );
}


