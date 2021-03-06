import React, { Component } from 'react';
import {StyleSheet, Text, View, Image,ImageBackground, Button,TouchableHighlight } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

class ProjectDetails extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions ={
    title:'ProjectDetails'
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
                  onPress={()=>this.props.navigation.navigate("AllProjectsHome")}
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
                <ImageBackground
                  source={require("./Icons/clockCircle.png")}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, alignItems:'center',justifyContent:'center' }}
                >
                  <Image
                    source={require("./Icons/clockLeg.png")}
                    resizeMode="contain"
                    style={{ width: 10, height: 10, marginLeft:3 }}
                  />  
                </ImageBackground>
                </TouchableHighlight>
                </View>
            </View>
            <View style={{margin:10,marginHorizontal:25}}>
              <Text style={styles.title}> Project Title</Text>
              <View style={{flexDirection:"row",marginVertical:5}}>
                <Image 
                  style={styles.image5}
                  source={require('./Icons/ongoing.png')}
                />
                <Text style={styles.textTaskType}>Ongoing |</Text>
                <Text style={styles.textTaskType}>Start Date - End Date</Text>
              </View>
            </View>
          </View>
          <View style={{flex:4,marginVertical:10,marginHorizontal:30}}>
              <View>
                    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <Text style={styles.subtitle}>TASKS</Text>
                        <TouchableHighlight style={styles.button2}>
                          <Text style={{color:"#3FA7D6",fontSize:13}}>VIEW ALL</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Location</Text>
                          <Text style={styles.textTaskName}>Task Type</Text>
                          <Text style={styles.textTaskType}>with Contact Name</Text>
                        </View> 
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Location</Text>
                          <Text style={styles.textTaskName}>Task Type</Text>
                          <Text style={styles.textTaskType}>with Contact Name</Text>
                        </View> 
                    </View>
                    <View style={{flexDirection:"row",marginVertical:10,alignItems:"center"}}>
                      <TouchableHighlight style={styles.circle2}>
                        <Text style={{color:"white", fontSize:24,fontWeight:"800",marginTop:-3}}>+</Text>
                      </TouchableHighlight>
                      <Text style={styles.textNewTask}>New Task</Text>
                    </View>
              </View>
              <View>
                    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <Text style={styles.subtitle}>ARTIFACTS</Text>
                        <TouchableHighlight style={styles.button2}>
                          <Text style={{color:"#3FA7D6",fontSize:13}}>VIEW ALL</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Filename</Text>
                          <Text style={styles.textTaskName}>Artifact Type</Text>
                          <Text style={styles.textTaskType}>Artifact Type</Text>
                        </View> 
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Location</Text>
                          <Text style={styles.textTaskName}>Artifact Type</Text>
                          <Text style={styles.textTaskType}>Artifact Type</Text>
                        </View> 
                    </View>
                    <View style={{flexDirection:"row",marginVertical:10,alignItems:"center"}}>
                      <TouchableHighlight style={{height:25,width:25}} >
                        <Image 
                        style={styles.image6}
                        source={require('./Icons/upload.png')}
                        />
                      </TouchableHighlight>
                      <Text style={styles.textNewTask}>Upload</Text>
                    </View>
              </View>      
          </View>
          <View style={styles.footer}>
            <View style={{flex:8,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.buttonPTO}>
                  <TouchableHighlight style={styles.imageContainer4} >
                    <Image 
                        style={styles.image7}
                        source={require('./Icons/forms.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>Forms</Text>
                </View>
                <View style={[styles.buttonPTO,styles.buttonCalls]}>
                  <TouchableHighlight style={styles.imageContainer4} >
                    <Image 
                        style={styles.image7}
                        source={require('./Icons/comments.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>Comments</Text>
                </View>
            </View>
            <View style={{flex:8,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.buttonPTO}>
                  <TouchableHighlight style={styles.imageContainer4} >
                    <Image 
                        style={styles.image8}
                        source={require('./Icons/contacts.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>Contacts</Text>
                </View>
                <View style={[styles.buttonPTO,styles.buttonCalls]}>
                  <TouchableHighlight style={styles.imageContainer4} >
                    <Image 
                        style={styles.image7}
                        source={require('./Icons/newemployee.png')}
                    />
                  </TouchableHighlight>
                  <Text style={styles.textPTOCalls}>New Employee</Text>
                </View>
            </View>
          </View>  
        </View>
      </ScrollView>
    );
  }
}


class AllProjectsHome extends Component{
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
                    <Text style={{marginRight:20}}>Projects</Text>
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
                    <Text style={styles.subtitle}>ONGOING PROJECTS</Text>
                    <View style={{flexDirection:"column"}}>
                      <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,marginHorizontal:25}}>
                        <TouchableHighlight 
                          style={styles.circle}
                          onPress={() => this.props.navigation.navigate('ProjectDetails')} 
                        >
                          <Text>1</Text>
                        </TouchableHighlight>
                        <View style={{flexDirection:"column"}}>
                          <Text style={styles.textLocation}>Project title</Text>
                          <Text style={styles.textTaskName}>Customer name</Text>
                          <Text style={styles.textTaskType}>Start Date - End Date</Text>
                        </View> 
                      </View>
                      <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,marginHorizontal:25}}>
                        <TouchableHighlight 
                          onPress={() => this.props.navigation.navigate('ProjectDetails')} 
                          style={styles.circle}
                        >
                          <Text>2</Text>
                        </TouchableHighlight>
                        <View style={{flexDirection:"column"}}>
                          <Text style={styles.textLocation}>Project title</Text>
                          <Text style={styles.textTaskName}>Customer name</Text>
                          <Text style={styles.textTaskType}>Start Date - End Date</Text>
                        </View> 
                      </View>
                    </View>
                </View>
                <View style={{flex:1,margin:10,marginHorizontal:25}}>
                    <Text style={styles.subtitle}>UPCOMING PROJECTS</Text>
                    <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Project title</Text>
                          <Text style={styles.textTaskName}>Customer name</Text>
                          <Text style={styles.textTaskType}>Start Date - End Date</Text>
                        </View> 
                        <View style={{flexDirection:"column",marginVertical:10}}>
                          <Text style={styles.textLocation}>Project title</Text>
                          <Text style={styles.textTaskName}>Customer name</Text>
                          <Text style={styles.textTaskType}>Start Date - End Date</Text>
                        </View> 
                    </View>
                </View>
            </View>
        </View>
      );
    }

}

const Stack=createStackNavigator();

class AllProjects extends Component{
  render(){
    return(
      <Stack.Navigator headerMode="none">
        <Stack.Screen  name="AllProjectsHome" component={AllProjectsHome}/>
        <Stack.Screen  name="ProjectDetails" component={ProjectDetails}/> 
      </Stack.Navigator>
    );
  }
}

export default AllProjects;

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
})