import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedbackBase, } from 'react-native';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";

export default function Upload() {  
  const [avatar, setAvatar] = useState();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });

    await Axios.post("http://localhost:3333/files", data);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addImageButton} onPress={uploadImage}>
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
