import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore'

export default function App() {
    const writeToFirestore = async () => {
      try {
        await firestore().collection('users').add({
          name: 'user name',
          age: 20,
        })
        console.log("success");
      }catch(error) {
        console.log('error', error)

      }
    }
    const writeToDatabase = async () => {
      try {
        await database().ref('users/123').set({
          name: 'user name',
          age: 31,
        })
        console.log("success");
      }catch(error) {
        console.log('error', error)

      }

  }


  return (
    <View style={styles.container}>
      <Button title='Write to Database' onPress={writeToDatabase}/>
      <Button title='Write to Firestore' onPress={writeToFirestore}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
    justifyContent: 'center',
  },
});
