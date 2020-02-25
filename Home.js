import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button,TouchableHighlight } from 'react-native';

class Home extends Component{
    
    render(){
      return (
        <View style={{flex:1}}>
            <View style={{flex:3,backgroundColor:'#EBF8FF'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View >
                <TouchableHighlight style={styles.imageContainer} onPress={()=>this.props.navigation.openDrawer()}>
                    <Image 
                        style={styles.image}
                        source={require('./Icons/navigationBar.png')}
                    />
                </TouchableHighlight>
                </View>
                <View style={{alignSelf:'flex-end'}}>
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image2}
                        source={require('./Icons/notifications.png')}
                    />
                </TouchableHighlight>
                </View>
              </View>    
            </View>

            <View style={{flex:3,backgroundColor:'white'}}>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={styles.todayTask}>TASKS TODAY</Text>
                <TouchableHighlight style={styles.button2}>
                  <Text style={{color:"#3FA7D6"}}>VIEW ALL</Text>
                </TouchableHighlight>
              </View>
              <View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:25}}>
                  <TouchableHighlight style={styles.circle}>
                    <Text>1</Text>
                  </TouchableHighlight>
                  <View style={{flexDirection:"column"}}>
                    <Text style={styles.textLocation}>12:00 PM, Location</Text>
                    <Text style={styles.textTaskName}>Task Name</Text>
                    <Text style={styles.textTaskType}>TASK TYPE</Text>
                  </View>
                  <Image 
                    style={styles.image2}
                    source={require('./Icons/upload.png')}
                  />
                  <Image 
                    style={styles.image3}
                    source={require('./Icons/checkIn.png')}
                  />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:25}}>
                  <TouchableHighlight style={styles.circle}>
                    <Text>2</Text>
                  </TouchableHighlight>
                  <View style={{flexDirection:"column"}}>
                    <Text style={styles.textLocation}>12:00 PM, Location</Text>
                    <Text style={styles.textTaskName}>Task Name</Text>
                    <Text style={styles.textTaskType}>TASK TYPE</Text>
                  </View>
                  <Image 
                    style={styles.image2}
                    source={require('./Icons/upload.png')}
                  />
                  <Image 
                    style={styles.image3}
                    source={require('./Icons/checkIn.png')}
                  />
                </View>
              </View>
              <View style={{flexDirection:"row",margin:10,marginHorizontal:25}}>
                <TouchableHighlight style={styles.circle2}>
                  <Text style={{color:"white", fontSize:24,fontWeight:"800",marginTop:-3}}>+</Text>
                </TouchableHighlight>
                <Text style={styles.textNewTask}>New Task</Text>
              </View>
            </View>

            <View style={{flex:1,backgroundColor:'white', borderTopWidth:1,borderTopColor:'#95D0EB'}}>
              <View style={{flex:8,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.buttonPTO}>
                  <TouchableHighlight style={styles.imageContainer3} >
                    <Image
                        style={styles.image2}
                        source={require('./Icons/calendar.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>Contacts</Text>
                </View>
                <View style={[styles.buttonPTO,styles.buttonCalls]}>
                  <TouchableHighlight style={styles.imageContainer3} >
                    <Image 
                        style={styles.image2}
                        source={require('./Icons/phone.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>Calls</Text>
                </View>
              </View>
            </View>

        </View>
      );
    }
}
export default Home;

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
    image3:{
        height:26,
        width:19,
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
    button2:{
      borderColor:"#3FA7D6",
      height:30,
      width:100,
      borderWidth:1,
      borderRadius:4,
      margin:12,
      marginRight:25,
      alignItems:"center",
      justifyContent:"center"
    },
    circle:{
      height:40,
      width:40,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#EBF8FF",
    },
    circle2:{
      height:25,
      width:25,
      borderRadius:12.5,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"rgba(0, 0, 0, 0.6)",
    },
    textLocation:{
      color:"rgba(0, 0, 0, 0.87)",
      fontSize:13,
      fontWeight:"500",
      margin:0,
    },
    textTaskName:{
      color:"rgba(0, 0, 0, 0.6)",
      fontSize:11,
      margin:1,

    },
    textTaskType:{
      color:"rgba(0, 0, 0, 0.38)",
      fontSize:9,
      margin:1,
    },
    textNewTask:{
      marginHorizontal:25,
      color:"rgba(0, 0, 0, 0.87)",
      fontWeight:"500",
      fontSize:13,
    },
  });

  