import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Picker,Text, TextInput, View, Button,Image, ImageBackground,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'
import { createStackNavigator } from '@react-navigation/stack';

class TaskCreated extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions ={
    title:'TaskCreated'
  };
  render(){
    return(
      <View style={{flex:1,backgroundColor:"white"}}>
          <View style={{flex:5,alignItems:"center",justifyContent:"center"}}>
            <TouchableHighlight style={styles.circle}>
            <Image 
                style={styles.image2}
                source={require('./Icons/checkMark.png')}
              />              
            </TouchableHighlight>
            <Text style={styles.subtitle1}>Activity Recorded</Text>
          </View>
          <View style={{flex:1, flexDirection:"row"}}>
            <View style={{flex:1}}>
            <TouchableHighlight 
              style={[styles.button1,styles.button1]}
              onPress={()=>{this.props.navigation.navigate("Home")}}
              >
              <Text style={[styles.textButton1]}>Back to Home</Text>
            </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}

const picker={borderBottomColor:'red',borderWidth: 0};
class MyDatePicker extends Component{
  constructor(props){
    super(props)
    this.state={date:"2020-02-16"}
  }
  render(){
    return (
      <DatePicker
        style={{marginTop:10,marginHorizontal:25, borderColor:"#D6D6D6", height:40, width:325}}
        //date={this.state.date}
        mode="date"
        placeholder="dd / mm /yyyy"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 280,
          },
          dateInput: {
            marginLeft: 0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
} 

const Tab = createMaterialTopTabNavigator();

function NewTaskForm({navigation}){

    let data = [{
        label: 'Project title 1',
        value: 'Project 1',
      }, {
        label: 'Project title 2',
        value: 'Project 2',
      }, {
        label: 'Project title 3',
        value: 'Project 3',
      }];
      var radio_props = [
        {label: 'Self', value: 0 },
        {label: 'Other(Select worker)', value: 1 }
      ];
  return (
    <View style={{flex:1}}>

    <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
        <View style={{alignSelf:'flex-end'}}><Text style={styles.textHeader}>Record Activity</Text>
        
        </View>
    </View>
    <View style={{flex:6,backgroundColor:'white'}}>

    <ScrollView style={{flex:1,backgroundColor:"white"}}>
      <View style={{ flex: 1,backgroundColor:'white' }}>
        <Text style={styles.textForm}> ACTIVITY NAME</Text>
        <TextInput style={styles.inputForm}/>
        <Text style={styles.textForm}>DESCRIPTION</Text>
        <TextInput style={styles.inputForm}/>
        <Text style={styles.textForm}>PROJECT</Text>
        <Dropdown containerStyle={{margin:10, marginHorizontal:25,borderWidth:1, borderColor:"#D6D6D6", height:40,justifyContent:"center"}}
           placeholder='Select Project'
           textColor='rgba(0, 0, 0, 0.38)'
           fontSize={13}
           data={data}
           animationDuration={0}
           baseColor={"rgba(0, 0, 0, 0.6)"}
           inputContainerStyle={{borderBottomColor:"transparent",marginBottom:15, marginHorizontal:10}}
        />
        <Text style={styles.textForm}>TYPE OF TASK</Text>
        <Dropdown
          containerStyle={{margin:10, marginHorizontal:25,borderWidth:1, borderColor:"#D6D6D6", height:40,justifyContent:"center"}}
          placeholder = "Select Task Type"
          textColor='rgba(0, 0, 0, 0.38)'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{borderBottomColor:"transparent",marginBottom:15, marginHorizontal:10}}
        />
        <Text style={styles.textForm}>DATE</Text>
        <MyDatePicker
        />
        <Text style={styles.textForm}>ADD CONTRIBUTERS</Text>
        <Dropdown
          containerStyle={{margin:10, marginHorizontal:25,borderWidth:1, borderColor:"#D6D6D6", height:40,justifyContent:"center"}}
          placeholder='Select Employee'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{borderBottomColor:"transparent",marginBottom:15, marginHorizontal:10}}
        />

    <Text style={styles.textForm}>NOTES/COMMENTS</Text>
        <TextInput style={styles.inputForm}/>
        <TouchableHighlight 
          style={{margin:25, backgroundColor:'#3FA7D6', borderRadius:4,height:40,  alignItems:'center', justifyContent:'center',}}
          onPress={() => navigation.navigate('TaskCreated')}
        >
            <Text style={{color:"white", fontSize:14}}>Save</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    </View>

    </View>
);

}

const Stack=createStackNavigator();
class Activity extends Component {
    render(){
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen  name="NewTaskForm" component={NewTaskForm}/>
        <Stack.Screen  name="TaskCreated" component={TaskCreated}/> 
      </Stack.Navigator>
    );
    }
  }

  export default Activity;

  const styles = StyleSheet.create({
    textHeader:{
      color:"rgba(0, 0, 0, 0.87)",
      fontSize: 24,
      lineHeight: 24,
      margin:20,
    },
    inputForm:{
      margin:10,
      marginHorizontal:25,
      height:40,

      borderWidth:1,
      borderColor:'#D6D6D6',
    },
    textForm:{
      marginLeft:25,
      marginTop:20,
      color:'rgba(0, 0, 0, 0.6)',
      fontSize:11,
    },
    button1:{
      height:48,
      margin:10,
      marginRight:20,
      backgroundColor:"#3FA7D6",
      borderRadius:4,
      alignItems:"center",
      justifyContent:"center",
    },
    textButton1:{
      color:"white",
    },
    circle:{
      height:140,
      width:140,
      borderRadius:70,
      backgroundColor:"#3FA7D6",
      alignItems:'center',
      justifyContent:'center',
    },
    subtitle1:{
      color:"rgba(0, 0, 0, 0.87)",
      fontSize:24,
      marginVertical:15

    },
    image2:{
      height:40,
      width:50,
      color:"black",
    },
  });