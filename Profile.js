import React, { useEffect, useState, Component} from 'react';
import {ScrollView, StyleSheet,ImageBackground,ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Bilgiler extends Component{

constructor(props) {

    super(props);
    this.state = {

     data:[],
     isLoading:true,

  
    }
     
  }

componentDidMount(){
    this.getData();

    this.setState({
      isLoading: false,
       
    });
  }






getData= async ()=>{

  const token = await AsyncStorage.getItem("jwt")
   fetch('http://10.0.2.2:3000/allpost',{
        headers:{
            'Authorization': 'Bearer '+ token,
        }
    })
    .then((res) => res.json())
    .then(async (result) => {
           this.setState({
      isLoading: false,
      data:result.posts
    });

           try {
             console.log(this.state.data)
            } catch (e) {
              console.log("error hai",e)
                  

            }

    })
   
    }

render(){
  const isLoading=this.state.isLoading;
  const data = this.state.data;
    return (

     <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <div>
            <Text>{item.name}</Text>
            <Text>{item.weight}</Text>
            <Text>{item.height}</Text>
            <Text>{item.age}</Text>
            </div>

          
            

          )}
        />
      )}
    </View>
   )
};
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },

  card:{
   width:390,
   height:100,
   marginTop:10,
   color:'white'


  },

  content:{
    width:55,
    
  },
  chekstwo:{
   flexDirection:'row',
   marginLeft:20,
   marginBottom:0,
   marginTop:0,
   height:20,
   width:200,
   justifyContent: 'space-between' 

  },

   cheks:{ 
   flexDirection:'row',
   marginBottom:23,
   marginTop:10,
   height:50,
   justifyContent: 'space-between' 
 },

})