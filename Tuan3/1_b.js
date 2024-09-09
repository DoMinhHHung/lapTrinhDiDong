import React from 'react';
import { Text, View, StyleSheet, Button, TextInput,Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={{ uri: 'https://picsum.photos/id/1/200/300' }} // 
          style={{}}
        ></Image>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: '800', textAlign: 'center', fontSize: 40 }}>FORGET PASSWORD</Text>
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <TextInput
          style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 5 }}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <button style={{ backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    borderWidth:0}}>NEXT</button>
      </View>
      <View style={{flex:1,backgroundColor:'#00CCF9'}}></View>
    </View>
  );
}
