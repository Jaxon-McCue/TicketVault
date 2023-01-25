import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [tickets, setTickets] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>
      <TextInput style={styles.input} placeholder='Number of Tickets' /> 
      <Pressable
        onPress={() => {setTickets(tickets + 1)}}
      >
        <Text style={styles.pressure}>Find The Cost</Text>
      </Pressable>
      <Text style={styles.price}>{tickets == 0 ? "" : "Ticket Cost: $" + tickets * 99.99}</Text>
      <Image source={require('./assets/images/concert.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
  },
  input : {
    borderWidth: 1,
    fontSize: 35,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  pressure: {
    backgroundColor: '#f98b88',
    fontSize: 35,
    padding: 10,
  },
  price: {
    fontSize: 35,
    marginTop: 30,
    marginBottom: 30
  }
});
