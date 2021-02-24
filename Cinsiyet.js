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


  constructor(props) {
    super(props);
    this.state = { 
      gender:'',
    
    }
}

  render(){

      const { gender  }=this.state;
  return (
     <ImageBackground 
  source={require('../../images/cinsiyetback.jpg')}
  style={{width:'100%' , height:'100%',  opacity: 1}}>
      <TouchableOpacity style={styles.buttonback}
             onPress={()=>this.props.navigation.navigate('Welcome')}>
             <Text style={{   color: 'black',    fontWeight: 'bold',alignItems: 'center',fontSize: 25,transform: [{ rotate: '180deg' }]}}>></Text>
             </TouchableOpacity>

            <View style={styles.container}>

           <Logo/>



                 <View style={styles.sideByside}>
          <TouchableOpacity 
             style={[styles.button , gender === 'woman' ? styles.active : null]}
             onPress={()=>this.props.navigation.navigate('BilgilerKadın')}
             >
             <Text style={{ marginTop:0,
    color:'white',
    textAlign:'center'}}>Woman</Text>
             </TouchableOpacity>

               

   <TouchableOpacity 
         style={[styles.button , gender === 'man' ? styles.active : null]}
            onPress={()=>this.props.navigation.navigate('BilgilerErkek')}
             >
              <Text style={{ marginTop:0,
    color:'white',
    textAlign:'center'}}>Man</Text>
             </TouchableOpacity>
 </View>

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
   marginBottom:150,

  },

 sideByside:{


  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginTop:50


},
  button:{
       backgroundColor: '#FF5A54',
       borderRadius:100,
       //width:50,
       //height:40,
       flex:1,
       padding:10,
       //alignContent:'center',
  },
  active:{
       backgroundColor:'black',
       color:'rgba(0, 0, 255, 1)',
       height:40,
  },  

    buttonback:{
   color: '#FFFFFF',
   alignItems: 'center',
   justifyContent: 'center',
   width:40,
   height:25,
   marginTop:30,
   marginBottom:-100


  },


})