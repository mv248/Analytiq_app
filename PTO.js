import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button,TouchableHighlight } from 'react-native';

class PTO extends Component{
    
    render(){
      return (
        <View style={{flex:1}}>
                    <View style={{flex:3,backgroundColor:'white'}}>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={styles.todayTask}>NEW TEXT</Text>
                <View style={styles.viewAllButton}><Button title="View All" color='#3FA7D6'/></View>
              </View>
            </View>

           
        </View>
      );
    }
}
export default PTO;

const styles = StyleSheet.create({
    todayTask: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize:15,
      color: 'rgba(0, 0, 0, 0.6)',
      alignSelf:'flex-start',
      lineHeight:15,
      margin:20,
      marginLeft:25,
    },
    viewAllButton:{
      margin:5,
      marginRight:25,
    },
    imageContainer:{
        backgroundColor:'rgba(255, 255, 255, 0.87)',
        height:50,
        width:50,
        borderRadius:25,
        marginTop:45,
        marginLeft:25,
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer2:{
        marginRight:25,
        marginLeft:0,
    },
    imageContainer3:{
      backgroundColor:'#3FA7D6',
      height:40,
      width:40,
      borderRadius:20,
      margin:7.5,
      alignItems:'center',
      justifyContent:'center',
    },
    
    image:{
        height:15,
        width:20,
    },
    image2:{
        height:25,
        width:20,
    },
    
    buttonPTO:{
      backgroundColor:'#EBF8FF',
      flex:2, 
      marginLeft:25, 
      marginRight:7.5, 
      marginTop:20, 
      marginBottom:35,
      flexDirection:"row",
      borderRadius:5,
    },
    buttonCalls:{
      marginRight:25, 
      marginLeft:7.5, 
    },
    textPTOCalls:{
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize:15,
      color: 'rgba(0, 0, 0, 0.6)',
      lineHeight:15,
      marginTop:15,
      marginLeft:0,
    },
  
  });

  