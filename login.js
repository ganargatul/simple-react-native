import React,{Component,PropTypes} from 'react';
import {View, Button,Text,TextInput,StyleSheet,Image,Icon} from 'react-native';
import index from './index';


const static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
}

_onpressLogin = () =>{
    this.props.navigator.push({
        passProps:{title: ''},
        title:'index'
        component: index
    })
    
}
export default class login extends Component<Props>{
    render(){
        return(
            <View style={styles.container}>
            <Image style={styles.iconn} 
                source={require('./icon.png')}
            />
            <TextInput style={styles.input} placeholder='Username Or Email'/>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <Button
                    onPress={this._onpressLogin}
                    title="Login"
                    style={styles.btnlgn}
                    />
            </View>
        )
    }

}

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
 
});