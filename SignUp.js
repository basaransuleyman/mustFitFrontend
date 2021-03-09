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
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styletoast={backgroundColor: "red",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};
const stylesuccess ={backgroundColor: "green",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};

import Logo from '../pages/Logo';
export default class SignUp extends React.Component {


  state = {
   email: '', password: '' , isLoading:false
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }




  signUp = async ()=> {
    const { email, password } = this.state
    const {navigate} = this.props.navigation;

if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
{
  Toast.show('Email  must be this way like this blabla@gmail.com',Toast.LONG,Toast.TOP,styletoast);
 return
            
}
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
             Toast.show('Registration Successful' ,Toast.LONG,Toast.TOP,stylesuccess);
             navigate('Login');
              
            } catch (error) {  
              console.log("error hai",e)
               Toast.show('This mail is use already' ,Toast.SHORT, Toast.TOP,styletoast);
            }
    })
  }
 
  render() {

     const {isLoading}=this.state
    return (
 
      <ImageBackground 
  source={require('../../images/registerback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>
<KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
                style= {styles.FlexGrowOne}>


           
      
    

   <View style={styles.container}>
    <Logo/>

<View style={styles.sideByside}>
  <Text style={{fontSize:20,color:'#24465c',marginTop:0,marginBottom:20,marginTop:20}}>MUST</Text>
  <Text style={{fontSize:20,color:'#88e315',marginTop:0,marginBottom:20,marginTop:20}}>FIT</Text>
    <Text style={{fontSize:15,color:'black',marginTop:0,marginBottom:20,marginTop:20,marginLeft:20}}>SIGNUP </Text>
</View>

   <View style={styles.inputContainer}>


           <TextInput
               style={styles.inputs}
            placeholder='Username'
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
              {this.state.isLoading ? (
                <ActivityIndicator animating={this.state.isLoading} size={"large"} color={"white"} />
                ) : (
                  <Text style={styles.signUpText}>Signup</Text>
                )}
             </TouchableOpacity>

            <TouchableOpacity style={styles.submitButtonTextone}
              onPress={()=>this.props.navigation.navigate('Login')}>
             <Text style={styles.signUpText}>I have account already</Text>
             
             </TouchableOpacity>
      </View>
            </KeyboardAvoidingView>
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
    FlexGrowOne: {
        flexGrow : 1
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
  sideByside:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
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

