import React from 'react';
import { Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 80, fontWeight: '500' }}>CODE</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>VERIFICATION</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>
          Enter one-time password sent on ++849092605798
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        paddingHorizontal: 10,
        alignSelf: 'center'
      }}>
        <View style={{
          width: 40,
          height: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}></View>
        <View style={{
          width: 40,
          height: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}></View>
        <View style={{
          width: 40,
          height: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}></View>
        <View style={{
          width: 40,
          height: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}></View>
        <View style={{
          width: 40,
          height: 80,
          borderWidth: 1,
          borderColor: 'black'
        }}></View>
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <button style={{ backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    borderWidth:0,
    fontWeight:'bold',
    fontSize:25}}>VERIFY CODE</button>
      </View>
      <View style={{flex:1,backgroundColor:'#00CCF9'}}></View>
    </View>
  );
}
