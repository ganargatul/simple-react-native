/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 /**<Text style={styles.kiri}>{tugas}</Text>*/

import React, {Component} from 'react';
import {AppRegistry, Image, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
		
      <View style={styles.container}>
	  <Image source={pic} style={{width: 193, height: 110}}></Image>
      <Text style={styles.kiri}>Nama : Ramadhani Samudra Gawang Indiyanto</Text>
        <Text style={styles.kiri}>NO: 31</Text>
        <Text style={styles.kiri}>Kelas : XI RPL 2</Text>
		<Image style={{width: 400, height: 400}} 
        source={require('./mine.jpg')} />
      </View>
    );
  }
}
const tugas = Platform.select({
	android:
	'Nama  : Ramadhani Samudra Gawang Indiyanto' +
	'Kelas : XI RPL 2 ' +
	'No Absen : 31',
	
});
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
	fontFamily: 'tahoma',
	fontSize:15,
  },
  kiri:{
	  textAlign:'left',
	  color:'#00FF00',
	  fontFamily:'tahoma',
	  fontSize:15,
	  marginBottom:2,
  },
});
