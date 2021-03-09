// SignUp.js
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styletoast={backgroundColor: "red",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};
const stylesuccess ={backgroundColor: "green",width: 300,color: "#ffffff",fontSize: 12,lineHeight: 2,lines: 1,borderRadius: 15,fontWeight: "bold",yOffset: 40};

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-native';


import Logo from '../pages/Logo';

export default class Login extends React.Component {


  state = {
   email: '', password: '' , isLoading:false
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }



  signUp = async ()=> {
    const { email, password } = this.state
    const {navigate} = this.props.navigation;
    this.setState({isLoading:true})

    fetch("http://10.0.2.2:3000/signin",{
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
             await AsyncStorage.setItem('jwt',data.token)
             navigate('Cinsiyet');
            Toast.show('Login Successful',Toast.LONG,Toast.TOP,stylesuccess);

            } catch (e) {
              console.log("error hai",e)
             Toast.show('Email or Password  wrong and  add all the fields',Toast.LONG,Toast.TOP,styletoast);

            }
    })
  }
 

render() {

  const {isLoading}=this.state

  return (


  <ImageBackground 
  source={require('../../images/loginback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>
     <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
                style= {styles.FlexGrowOne}>
   <View style={styles.container}>

    <Logo/>

   

 

<View style={styles.sideByside}>
  <Text style={{fontSize:20,color:'#24465c',marginTop:0,marginBottom:20,marginTop:20}}>MUST</Text>
  <Text style={{fontSize:20,color:'#88e315',marginTop:0,marginBottom:20,marginTop:20}}>FIT</Text>
    <Text style={{fontSize:15,color:'black',marginTop:0,marginBottom:20,marginTop:20,marginLeft:20}}>LOGIN </Text>
</View>

     <View style={styles.inputContainer}>
  
       
         <TextInput 
          style={styles.inputs}
          placeholder='Username'
          autoCapitalize="none"
          value={this.state.Email}
          onChangeText={val => this.onChangeText('email', val)}
        />
       </View>


   <View style={styles.inputContainer}>

        <TextInput
          style={styles.inputs}
          placeholder='Password'
          secureTextEntry={true}
          value={this.state.password}
          autoCapitalize="none"
          underlineColorAndroid='transparent'
          onChangeText={val => this.onChangeText('password', val)}
        />
        

        </View>


  


            <TouchableOpacity style={styles.submitButtonText}
              onPress={this.signUp}>
              {this.state.isLoading ? (
                <ActivityIndicator animating={this.state.isLoading} size={"large"} color={"white"} />
                ) : (
                  <Text style={styles.signUpText}>Login</Text>
                )}
             </TouchableOpacity>


            <TouchableOpacity style={styles.submitButtonTextone}
              onPress={()=>this.props.navigation.navigate('SignUp')}>
             <Text style={styles.signUpText}>Don't have a account</Text>
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
   margin: 15,
   fontSize: 25,
   marginBottom :30,
   marginTop :0,
   color : 'white',
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
   color: '#FFFFFF',
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