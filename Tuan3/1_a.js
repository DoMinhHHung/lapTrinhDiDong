import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'lightblue'}}>
        <View style={{flex:3,alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 100, width: 100, borderRadius: 90, borderColor: 'black', borderWidth: 9}}></View>
        </View>

        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontWeight: 700}}>GROW</Text>
        <Text style={{ fontWeight: 700}}>YOUR BUSINESS</Text>
        </View>
        <View style={{flex:1, alignItems: 'center',justifyContent:'center'}}>
        <Text style={{ fontWeight: 'bold', textAlign:'center'}}>We will help you to grow your business using online server</Text>
        </View>
        <View style={{flex:2, backgroundColor: '', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
       <View style={{ marginRight: 10 }}>
        <Button
          title="LOGIN"
          color="yellow"
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Button
          title="SIGNUP"
          color="yellow"
        />
      </View>
      </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{ fontWeight: 700}}>HOW WE WORK?</Text>
        </View>
        <View style={{flex:1,backgroundColor:'blue'}}>
        </View>
    </View>
    );
}