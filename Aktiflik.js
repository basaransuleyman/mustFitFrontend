import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground
  
} from 'react-native';


import Logo from '../pages/Logo';

export default class Welcome extends Component<{}> {
  render(){
  return (
     <ImageBackground 
  source={require('../../images/back.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>
            <View style={styles.container}>
           <Logo/>
            <TouchableOpacity style={styles.submitButtonText}
             onPress={()=>this.props.navigation.navigate('sifirGun')}>
             <Text style={styles.signUpText}>Mointless 0 Days         > </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.submitButtonText}
             onPress={()=>this.props.navigation.navigate('birikiGun')}>
             <Text style={styles.signUpText}>1-2 Days/Week         > </Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.submitButtonText}
              onPress={()=>this.props.navigation.navigate('ucdordGun')}>
             <Text style={styles.signUpText}>3-4 Days/Week         > </Text>
             </TouchableOpacity>
              <TouchableOpacity style={styles.submitButtonText}
              onPress={()=>this.props.navigation.navigate('besaltiGun')}>
             <Text style={styles.signUpTextone}>5-6 Days/Week         > </Text>
             </TouchableOpacity>
              <TouchableOpacity style={styles.submitButtonText}
              onPress={()=>this.props.navigation.navigate('yediGun')}>
             <Text style={styles.signUpTextone}>All Days/Week         > </Text>
             </TouchableOpacity>
           </View>
           </ImageBackground>
        
  );
 }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,

 },

 signUpTextone:{
  color: 'white',
   alignItems: 'center',
    

 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor: '#FF5A54',
   width:250,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
    marginTop:30,
 },
 signUpText:{
   color: '#FFFFFF',
   alignItems: 'center'
 },
 inputs:{
   height:45,
   marginLeft:16,
   borderBottomColor: '#FFFFFF',
   flex:1,
  },
})