import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button,TouchableHighlight } from 'react-native';

class AllProjects extends Component{
    render(){
      return(
        <View style={{flex:1}}>
            <View style={{flex:2,backgroundColor:"#EBF8FF"}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View >
                <TouchableHighlight style={styles.imageContainer} >
                    <Image 
                        style={styles.image}
                        source={require('./Icons/back.png')}
                    />
                </TouchableHighlight>
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <TouchableHighlight style={styles.imageContainer2} >
                    <Image 
                        style={styles.image2}
                        source={require('./Icons/timesheet.png')}
                    />
                </TouchableHighlight>
                </View>
              </View>    
            </View>
            <View style={{flex:3,backgroundColor:"white"}}>

            </View>
        </View>
      );
    }

}

export default AllProjects;

const styles = StyleSheet.create({

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

image:{
    height:15,
    width:20,
},
image2:{
    height:25,
    width:20,
},
})