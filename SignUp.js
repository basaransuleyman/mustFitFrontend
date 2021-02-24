// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: WIDTH } = Dimensions.get('window');

import Logo from '../pages/Logo';
export default class SignUp extends React.Component {


  state = {
   email: '', password: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }



  signUp = async ()=> {
    const { email, password } = this.state
    const {navigate} = this.props.navigation;

    fetch("http://10.0.2.2:3000/signup",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
    })
    .then(res=>res.json())
     .then(async (data)=>{
            try {
             await AsyncStorage.setItem('token',data.token)
             
                   Alert.alert("Signup is Succes  ", );
             navigate('Login');
              
            } catch (error) {  
              console.log("error hai",e)
              Alert.alert(
              "This Email have use already  ",  );
            }
    })
  }
 
  render() {
    return (

      <ImageBackground 
  source={require('../../images/registerback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>


   <View style={styles.container}>
    <Logo/>

   <Text style={styles.input}>Join Us</Text>

   <View style={styles.inputContainer}>


         <TextInput
             style={styles.inputs}
          placeholder='Email'
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={val => this.onChangeText('email', val)}
        />
       
        </View>


   <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder='Password'
          secureTextEntry={true}
          svalue={this.state.password}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText('password', val)}
        />
        

      </View>





            <TouchableOpacity style={styles.submitButtonText}
              onPress={this.signUp}>
             <Text style={styles.signUpText}>SignUp</Text>
             </TouchableOpacity>


            <TouchableOpacity style={styles.submitButtonTextone}
              onPress={()=>this.props.navigation.navigate('Login')}>
             <Text style={styles.signUpText}>I have account already</Text>
             
             </TouchableOpacity>
      </View>
      </ImageBackground>
     
    )
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',


  },
  input: {
   margin: 0,
   fontSize: 25,
   marginBottom :0,
   marginTop :0,
   color : 'black',
  },
  submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor:'#FF5A54',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:10,

 },

 submitButtonTextone:{
  color: '#FFFFFF',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:0,

 },
 signUpText:{
   color: 'black',
   alignItems: 'center',

 },
 inputContainer: {
   borderBottomColor: '#FF5A54',
   backgroundColor:'white',
   borderRadius:5,
    opacity:0.8,
   borderBottomWidth: 1,
   width:350,
   height:45,
   marginBottom:10,
   flexDirection: 'row',
   alignItems:'center'
 },
 inputs:{
   height:45,
   marginLeft:12,
   borderBottomColor: '#FFFFFF',
   flex:1,
  },
})