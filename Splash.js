import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import LottieView from 'lottie-react-native';

export default class Splash extends Component  {


 constructor(props) {
  super()

  }

render(){
	   const {navigate} = this.props.navigation;
	return(

			
      <View	style={{flex:1,backgroundColor:'#ffffff'}}>


 		<Text  style={{fontSize:25,fontWeight:'bold',fontStyle:'italic',color:'#24465c',width:400,marginBottom:0,marginTop:0,textAlign:'center'}}>M U S T</Text>
 		<Text  style={{fontSize:25,fontWeight:'bold',fontStyle:'italic',color:'#88e315',width:400,marginBottom:0,marginTop:0,textAlign:'center'}}>F I T</Text>
     
      <LottieView	
            source={require('../../assets/splash.json')}
      		autoPlay
      		loop ={false}
      		speed = {1}
      		onAnimationFinish = {()=>{
      				this.props.navigation.navigate('Profile');
      		}}
      		
      		
      />
      </View>


		)
   }
 }


const styles = StyleSheet.create({

	  sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
},

  
});
