import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,ImageBackground, Button,TouchableHighlight } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

class TaskDetails extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions ={
    title:'TaskDetails'
  };
  render(){
    return(
      <ScrollView style={{backgroundColor:"white"}}>
        <View style={{flex:1,backgroundColor:"white"}}>
          <View style={{flex:1}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View >
                <TouchableHighlight 
                    style={styles.imageContainer}
                    onPress={()=>this.props.navigation.navigate("AllTasksHome")}
                >
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Image 
                        style={styles.image}
                        source={require('./Icons/back.png')}
                    />
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{alignSelf:'flex-end', flexDirection:"row"}}>
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image3}
                        source={require('./Icons/map.png')}
                    />
                </TouchableHighlight>
                
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image2}
                        source={require('./Icons/upload.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image3}
                        source={require('./Icons/edit.png')}
                    />
                </TouchableHighlight>
                </View>
            </View>
            <View style={{margin:10,marginHorizontal:25}}>
              <Text style={styles.title}>Task Name</Text>
              <View style={{flexDirection:"row",marginVertical:5}}>
                <Text style={styles.textTaskName}>Task Details</Text>
              </View>
            </View>
          </View>
          <View style={{flex:4,marginVertical:10,marginHorizontal:25,flexDirection:"column"}}>             
                    <Text style={styles.subtitle}>DESCRIPTION</Text>
                    <Text style={styles.textField}>Lorem ipsum dolor sit amet, consectetur dipiscing elit. Dis eu nullam eu, eu dui mauris felis. Cursus risus eget arcu feugiat ut donec id. Dui morbi eros cursus nunc interdum eu sit cras.</Text>
                    <Text style={styles.subtitle}>ASSOCIATED PROJECT</Text>
                    <Text style={styles.textField}>Project Title</Text>
                    <Text style={styles.subtitle}>ASSIGNED TO</Text>
                    <Text style={styles.textField}>Worker Name</Text>
                    <Text style={styles.subtitle}>PROJECT START/END DATE</Text>
                    <Text style={styles.textField}>Oct 10 (Today)-> Oct 14</Text>
                    <Text style={styles.subtitle}>STATUS</Text>
                    <Text style={styles.textField}>Created</Text>
                    <Text style={styles.subtitle}>PRIORITY</Text>
                    <Text style={styles.textField}>Priority Level</Text>
                    <Text style={styles.subtitle}>BILLABLE TO CUSTOMER?</Text>
                    <Text style={styles.textField}>Yes</Text>
                    <Text style={styles.subtitle}>PREREQUISITES</Text>
                    <Text style={styles.textField}>None</Text>
                    <Text style={styles.subtitle}>ADDED ON</Text>
                    <Text style={styles.textField}>Oct 10 (Today)</Text>
                    <Text style={styles.subtitle}>ADDED BY</Text>
                    <Text style={styles.textField}>Employee Name</Text>
          </View>
          
        </View>
      </ScrollView>
    );
  }
}


class AllTasksHome extends Component{
    render(){
      return(
        <View style={{flex:1}}>
            <View style={{flex:2,backgroundColor:"#EBF8FF"}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View >
                <TouchableHighlight style={styles.imageContainer3} >
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Image 
                        style={styles.image}
                        source={require('./Icons/back.png')}
                    />
                    <Text style={{marginRight:20}}>Tasks</Text>
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{alignSelf:'flex-end', flexDirection:"row"}}>
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image3}
                        source={require('./Icons/timesheet.png')}
                    />
                </TouchableHighlight>
                
                <TouchableHighlight style={[styles.imageContainer,styles.imageContainer2]} >
                    <Image 
                        style={styles.image2}
                        source={require('./Icons/projectCalendar.png')}
                    />
                </TouchableHighlight>
                </View>
              </View>    
            </View>
            <View style={{flex:3,flexDirection:"column", backgroundColor:"white"}}>
                <TextInput placeholder="Search projects" style={styles.inputForm}/>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <TouchableHighlight style={styles.sortingButtons}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image 
                                style={styles.image4}
                                source={require('./Icons/sort.png')}
                            />
                            <Text style={styles.textSort}>FILTERS</Text>
                        </View>
                    </TouchableHighlight>
                    </View>
                    <View style={{flex:1}}>
                    <TouchableHighlight style={styles.sortingButtons}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image 
                                style={styles.image4}
                                source={require('./Icons/sort.png')}
                            />
                            <Text style={styles.textSort}>SORT BY</Text>
                        </View>
                    </TouchableHighlight>
                    </View>
                </View>
                <View style={{flex:1,margin:10,marginHorizontal:25}}>
                    <Text style={styles.subtitle}>TODAY'S TASKS</Text>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10}}>
                        <TouchableHighlight 
                          style={styles.circle}
                          onPress={() => this.props.navigation.navigate('TaskDetails')} 
                        >
                          <Text>1</Text>
                        </TouchableHighlight>
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.textLocation}>12:00 PM, Location</Text>
                            <Text style={styles.textTaskName}>Task Name</Text>
                            <Text style={styles.textTaskType}>TASK TYPE</Text>
                        </View> 
                        <Image 
                            style={styles.image9}
                            source={require('./Icons/upload.png')}
                        />
                        <Image 
                            style={styles.image10}
                            source={require('./Icons/checkIn.png')}
                        />
                      </View>
                      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10,}}>
                        <TouchableHighlight 
                          onPress={() => this.props.navigation.navigate('TaskDetails')} 
                          style={styles.circle}
                        >
                          <Text>2</Text>
                        </TouchableHighlight>
                        <View style={{flexDirection:"column"}}>
                            <Text style={styles.textLocation}>12:00 PM, Location</Text>
                            <Text style={styles.textTaskName}>Task Name</Text>
                            <Text style={styles.textTaskType}>TASK TYPE</Text>
                        </View> 
                        <Image 
                            style={styles.image9}
                            source={require('./Icons/upload.png')}
                        />
                        <Image 
                            style={styles.image10}
                            source={require('./Icons/checkIn.png')}
                        />
                      </View>
                    </View>
                </View>
                <View style={{flex:1,margin:10,marginHorizontal:25}}>
                    <Text style={styles.subtitle}>FUTURE TASKS</Text>
                    <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"column",marginVertical:10}}>
                            <Text style={styles.textLocation}>12:00 PM, Location</Text>
                            <Text style={styles.textTaskName}>Task Name</Text>
                            <Text style={styles.textTaskType}>TASK TYPE</Text>
                        </View> 
                        <View style={{flexDirection:"column",marginVertical:10}}>
                            <Text style={styles.textLocation}>12:00 PM, Location</Text>
                            <Text style={styles.textTaskName}>Task Name</Text>
                            <Text style={styles.textTaskType}>TASK TYPE</Text>
                        </View> 
                    </View>
                </View>
            </View>
        </View>
      );
    }

}

const Stack=createStackNavigator();

class AllTasks extends Component{
  render(){
    return(
      <Stack.Navigator headerMode="none">
        <Stack.Screen  name="AllTasksHome" component={AllTasksHome}/>
        <Stack.Screen  name="TaskDetails" component={TaskDetails}/> 
      </Stack.Navigator>
    );
  }
}

export default AllTasks;

const styles = StyleSheet.create({

imageContainer:{
    backgroundColor:'rgba(255, 255, 255, 0.87)',
    height:40,
    width:40,
    borderRadius:20,
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
    height:40,
    width:120,
    borderRadius:20,
    backgroundColor:'rgba(255, 255, 255, 0.87)',
    justifyContent:'center',
    marginTop:45,
    marginLeft:25,
},
imageContainer4:{
  backgroundColor:'#3FA7D6',
  height:35,
  width:35,
  borderRadius:17.5,
  margin:7.5,
  alignItems:'center',
  justifyContent:'center',
},
image:{
    height:15,
    width:20,
    marginHorizontal:10
},
image2:{
    height:25,
    width:20,
},
image3:{
    height:20,
    width:22,
},
image4:{
    height:11,
    width:15,
    marginHorizontal:10
},
image5:{
  height:15,
  width:10,
  marginHorizontal:10
},
image6:{
  height:20,
  width:18,
},
image7:{
  height:17,
  width:17,
},
image8:{
  height:13,
  width:20,
},
image9:{
    height:25,
    width:20,
},
image10:{
    height:26,
    width:19,
},
inputForm:{
    margin:10,
    marginHorizontal:25,
    height:40,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#D6D6D6',
  },
    sortingButtons:{
        height:30,
        borderColor:"#828282",
        borderWidth:1,
        borderRadius:5,
        margin:10,
        marginHorizontal:25,
        justifyContent:"center",
    },
    textSort:{
        fontSize:13,
        fontWeight:"600",
        color:"rgba(0, 0, 0, 0.6)",
    },
    circle:{
        height:40,
        width:40,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#EBF8FF",
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
      subtitle:{
        fontSize:13,
        color:"rgba(0, 0, 0, 0.6)",
      },
      title:{
        fontSize:29,
        color:"rgba(0, 0, 0, 0.87);"
      },
      button2:{
        borderColor:"#3FA7D6",
        height:24,
        width:100,
        borderWidth:1,
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center",
        marginTop:-5,
      },
      circle2:{
        height:25,
        width:25,
        borderRadius:12.5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(0, 0, 0, 0.6)",
      },
      textNewTask:{
        marginHorizontal:25,
        color:"rgba(0, 0, 0, 0.87)",
        fontWeight:"500",
        fontSize:13,
      },
      footer:{
        flex:2,
        marginVertical:10,
        borderTopWidth:1,
        borderTopColor:"#D6D6D6"
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
      textField:{
        fontWeight:"500",
        fontSize:13,
        color:"rgba(0, 0, 0, 0.87)",
        marginVertical:5,
        marginBottom:15,
      }
})