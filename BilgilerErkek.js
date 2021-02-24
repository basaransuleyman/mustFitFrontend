import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
  ImageBackground,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';



import Logo from '../pages/Logo';


export default class Bilgiler extends Component {


  state = {
  age:'',
  name:'',
  height:'',
  weight:'',
  neck:'',
  belly:'',
  hip:'',
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }



  sumbitData = async ()=> {
   const token = await AsyncStorage.getItem("jwt")
   const {name, age, height, weight, neck, belly, hip} = this.state
   const {navigate} = this.props.navigation;

    fetch("http://10.0.2.2:3000/createpost",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+ token
      },
      body:JSON.stringify({
        name,
        age,
        height,
        weight,
        neck,
        belly,
        hip
      })
    })
    .then(res=>res.json())
     .then(async (data)=>{
           try {      
               Alert.alert("Yes !  " + name + " let's be fit")
               navigate('Profile');
             }
             catch (e) {
                console.log("error hai",e) 
                Alert.alert("ERROR")
             }

            })
  }




               
            
              
     
 
 


    render() {

   
        return (
 <ImageBackground 
  source={require('../../images/back.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 0.9}}>

         


              <TouchableOpacity style={styles.buttonback}
             onPress={()=>this.props.navigation.navigate('Cinsiyet')}>
             <Text style={{   color: 'black',    fontWeight: 'bold',alignItems: 'center',fontSize: 25,transform: [{ rotate: '180deg' }]}}>></Text>
             </TouchableOpacity>

          

                <View style={styles.cheks}>  


                         <Text style={styles.texts}>INFORMATIONS</Text>



                 

                <View style={styles.buttons}>
           
               
      
                    <View style={styles.middle}>
                <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Your's name"
                 keyboardType="default"
                 underlineColorAndroid='transparent'
                 value={this.state.name}
                 onChangeText={val => this.onChangeText('name',val)}/>
                 </View>
                    </View>

                  <View style={styles.sideByside}>

                <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Age"
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.age}
                 onChangeText={val => this.onChangeText('age',val)}/>
                 </View>


                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Height(cm)"
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.height}
                 onChangeText={val => this.onChangeText('height',val)}/>
                 </View>

                     </View>



                  <View style={styles.sideByside}>

                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Weight(kg)"
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.weight}
                 onChangeText={val => this.onChangeText('weight',val)}/>
                 </View>

             
                 


                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Neck(cm)"
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.neck}
                 onChangeText={val => this.onChangeText('neck',val)}/>
                 </View>

                      </View>

                            <View style={styles.sideByside}>
                 <View style={styles.inputContainer}>
                 <TextInput style={styles.inputs}
                 placeholder="Waist(cm)"
                 keyboardType="numeric"
                 underlineColorAndroid='transparent'
                 value={this.state.belly}
                 onChangeText={val => this.onChangeText('belly',val)}/>
                 </View>


                
                 </View>
                 </View>


                  <View style={styles.sideByside}>
              <TouchableOpacity style={styles.signUpTextfour}
              onPress={this.sumbitData}>
             <Text style={styles.signUpTextone}>Next</Text>
             </TouchableOpacity>
               </View>



            
              </View>
          
</ImageBackground>

        );
    }

    
}


const styles = StyleSheet.create({


 cheks:{ 

  top:40,
 
 },


sideByside:{

  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',


},

  active:{
       backgroundColor:'white',
       color:'rgba(0, 0, 255, 1)',
       height:35,
  },  
  buttonback:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   width:40,
   height:25,
   marginTop:30,


  },

  button:{
       borderRadius:90,
       width:100,
       height:40,
       marginLeft:20,
       marginRight:20,
       marginBottom:20,
       backgroundColor:'#FF5A54',
       //flex:1,
       padding:14,
       alignContent:'center',
  },

  submitButtonText:{
    color: '#FFFFFF',
   width:20,
   height:25,
   justifyContent: 'center',
   alignItems: 'center',
      top:-20,

 },



 texts:{
   
    color:'white',
    fontSize: 25,
    marginBottom:40,
    textAlign:'center',
    marginTop:20,
 },

 inputContainer: {
   borderBottomColor:  '#FF5A54',
   backgroundColor:'white',
   borderRadius:5,
   borderBottomWidth: 1,
   width:100,
   height:40,
   opacity:0.8,
   marginRight:35,
   marginBottom:15,
   flexDirection: 'row',
   alignItems:'center',
   marginLeft:35

 },





 inputs:{
   height:40,
   marginLeft:0,
   borderBottomColor: '#FFFFFF',
   flex:1,

  },

   submitButton: {
   backgroundColor: '#7a42f4',
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonTextone:{
   color: '#FFFFFF',
   backgroundColor: '#FF5A54',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:10,
   marginBottom:20,
   marginLeft:5,
   marginRight:5
 },

  submitButtonTexttwo:{
   color: '#FFFFFF',
   backgroundColor: '#FF5A54',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:50,
 },

  submitButtonTextthree:{
   color: '#FFFFFF',
   backgroundColor: '#FF5A54',
   width:170,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:50,
 },

 submitButtonTextfour:{
  width:170,
   height:45,
  justifyContent: 'center',
   alignItems: 'center',
   marginTop:20
 },

 signUpTextfour:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
      color: '#FFFFFF',
   backgroundColor:'#FF5A54',
   width:170,
   height:45,
   borderRadius:10,
   marginTop:30,
    

 },




 signUpTextone:{
   color: '#FFFFFF',
   alignItems: 'center',
   fontSize: 16,
 },

 iconbutton:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    marginTop:0
 },

 middle:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',   
    marginBottom:20
 }

})

