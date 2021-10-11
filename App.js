import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedbackBase, } from 'react-native';



export default function App() { 
  return (

    <View style={styles.container}>
        <TouchableOpacity style={styles.addImageButton} onPress={() => {}} >
          <Text style={{ color: 'white', fontSize: 20, fontWeight:"bold", marginTop: -2}}>+</Text>
        </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column-reverse',
    alignSelf: 'flex-end',
    marginBottom: 25,
    marginRight: 25,
  },
  addImageButton: {
    width:60,
    height:60,
    backgroundColor:"#1E90FF",
    borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
