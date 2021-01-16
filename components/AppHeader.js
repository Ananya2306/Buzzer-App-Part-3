import * as React from 'react';
import { Text, StyleSheet,View } from 'react-native';


class AppHeader extends React.Component{

  render(){
    return(
      <View>

      <Text
      style={
styles.textContainer
      }
      >
      Quiz Buzzer App
      </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({

    textContainer :{
          backgroundColor:'cyan',
           marginBottom: 100,
            color : "blue",
            fontWeight: 'bold',
            fontSize:40
   
}
})
export default AppHeader