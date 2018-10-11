import React,{Component} from 'react';
import {View, Button,Text,TextInput,StyleSheet,Image,Icon, NavigatorIOS,TouchableOpacity} from 'react-native';
import main from './Componens/main';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

 class login extends Component<Props>{
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.iconn} 
                source={require('./icon.png')}
            />
            <TextInput style={styles.input} placeholder='Username Or Email'/>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('main')}>
          <Text style={styles.buttonText} > Login </Text>
        </TouchableOpacity>
            </View>

        )
    }

}
const RootStack = createStackNavigator(
    {
      Home: login,
      main: main,
    },
    {
      initialRouteName: 'Home',
    }
  );
const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#FF4757',
    },
    btnlgn:{
      
        color:'#FF4757',
        borderRadius: 10,
    },
    input:{
        alignItems:'center',
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        width: 298,
        height: 41,
    },
    iconn:{
        width:172, 
        height:98,
        marginBottom: 20,
        alignItems: 'center',
        
    },
	buttonText:{
    fontSize:13,
    color:'#f7f7f7'
  },
 
});
export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }	