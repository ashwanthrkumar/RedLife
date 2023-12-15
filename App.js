
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Screens/Splash';

export default function App() {
  return (
    <>
      <Splash />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
