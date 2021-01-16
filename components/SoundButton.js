import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          styles.button
        }
        onPress={this.playSound}>
        <Text
          style={
           styles.buttonText
          }>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  button :{
    marginTop: 100,
          backgroundColor: 'red',
          borderRadius: 100,
          width: 200,
          height: 200,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
  },
  buttonText :{
    fontWeight : 'bold',
        textAlign: 'center',
        fontSize:24,
        
  }
});

export default SoundButton