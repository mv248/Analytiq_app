import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Picker, Text, TextInput, View, Button, Image, ImageBackground, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'
import { createStackNavigator } from '@react-navigation/stack';


class TaskCreated extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'TaskCreated'
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
          <TouchableHighlight style={styles.circle}>
            <Image
              style={styles.image2}
              source={require('./Icons/checkMark.png')}
            />
          </TouchableHighlight>
          <Text style={styles.subtitle1}>Task Created</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              style={[styles.button1, styles.button2]}
              onPress={() => { this.props.navigation.navigate("Basic Details"); this.props.navigation.navigate("Home") }}
            >
              <Text style={[styles.textButton1, styles.textButton2]}>Back to Home</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableHighlight style={styles.button1}>
              <Text style={styles.textButton1}>Check-in</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const picker = { borderBottomColor: 'red', borderWidth: 0 };
function BasicDetailsScreen({ navigation }) {
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
    { label: 'Self', value: 0 },
    { label: 'Other (Select worker)', value: 1 }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={styles.textForm}>TASK NAME</Text>
        <TextInput style={styles.inputForm} />
        <Text style={styles.textForm}>DESCRIPTION</Text>
        <TextInput style={styles.inputForm} />
        <Text style={styles.textForm}>PROJECT</Text>
        <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
          placeholder='Select Project'
          textColor='rgba(0, 0, 0, 0.38)'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
          pickerStyle={{}}
        />
        <Text style={styles.textForm}>TYPE OF TASK</Text>
        <Dropdown
          containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
          placeholder='Select Type'
          textColor='rgba(0, 0, 0, 0.38)'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
        />
        <Text style={styles.textForm}>CUSTOMER</Text>
        <Dropdown
          containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
          placeholder='Select Customer'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
        />
        <Text style={styles.textForm}>ASSIGNED TO</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => { true }}
          buttonColor={'rgba(0, 0, 0, 0.87)'}
          selectedButtonColor={'rgba(0, 0, 0, 0.87)'}
          buttonSize={10}
          style={{ margin: 10, marginLeft: 25 }}
        />
        <Dropdown
          containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
          data={data}
          fontSize={13}
          placeholder='Select Worker'
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
        />
        <TouchableHighlight
          style={{ margin: 25, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', }}
          onPress={() => navigation.navigate('Date Location')}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Next Step</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

class MyDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2020-02-16" }
  }
  render() {
    return (
      <DatePicker
        style={{ marginTop: 15, marginHorizontal: 25, width: 320 }}
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
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { this.setState({ date: date }) }}
      />
    )
  }
}
function DateLocationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: "column" }}>
      <View style={{ flex: 3 }}>
        <Text style={styles.textForm}>PROJECTED START/END DATES</Text>
        <MyDatePicker />
        <MyDatePicker />
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ flex: 1, }}>
          <Text style={styles.textForm}>LOCATION</Text>
        </View>
        <View style={{ flex: 5, backgroundColor: "#EBF8FF" }}>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <TouchableHighlight
          style={{ margin: 25, marginTop: 40, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', }}
          onPress={() => navigation.navigate('Final Details')}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Next Step</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
function FinalDetailsScreen({ navigation }) {
  var radio_props_priority = [
    { label: 'Low', value: 0 },
    { label: 'Medium', value: 1 },
    { label: 'High', value: 2 }
  ];
  var radio_props_confirmation = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
  ];
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
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={styles.textForm}>STATUS</Text>
        <Dropdown
          containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}

          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
        />
        <Text style={styles.textForm}>PRIORITY</Text>
        <RadioForm
          radio_props={radio_props_priority}
          initial={0}
          onPress={(value) => { true }}
          buttonColor={'rgba(0, 0, 0, 0.87)'}
          selectedButtonColor={'rgba(0, 0, 0, 0.87)'}
          buttonSize={10}
          style={{ margin: 10, marginLeft: 25 }}
        />
        <Text style={styles.textForm}>BILLABLE TO CUSTOMER?</Text>
        <RadioForm
          radio_props={radio_props_confirmation}
          initial={0}
          onPress={(value) => { true }}
          buttonColor={'rgba(0, 0, 0, 0.87)'}
          selectedButtonColor={'rgba(0, 0, 0, 0.87)'}
          buttonSize={10}
          style={{ margin: 10, marginLeft: 25 }}
        />
        <Text style={styles.textForm}>PREREQUISITES</Text>
        <Dropdown
          containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
          placeholder='Select Task'
          fontSize={13}
          data={data}
          animationDuration={0}
          baseColor={"rgba(0, 0, 0, 0.6)"}
          inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
        />
        <Text style={styles.textForm}>NOTES/COMMENTS</Text>
        <TextInput style={styles.inputForm} />
        <TouchableHighlight
          style={{ margin: 25, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', }}
          onPress={() => navigation.navigate('TaskCreated')}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Create Task</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function NewTaskForm({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ alignSelf: 'flex-end' }}><Text style={styles.textHeader}>New Task</Text>
        </View>
      </View>
      <View style={{ flex: 6, backgroundColor: 'white' }}>
        <Tab.Navigator
          tabBarOptions={{
            style: { borderBottomColor: '#95D0EB', borderBottomWidth: 2, height: 40 },
            indicatorStyle: { backgroundColor: '#3FA7D6', height: 2, },
            // tabStyle:{backgroundColor:'#EBF8FF',marginLeft:5,marginRight:5,justifyContent:'center',alignItems:'center'},
            labelStyle: { fontSize: 11, marginBottom: 10 },
          }}>
          <Tab.Screen name="Basic Details" component={BasicDetailsScreen} />
          <Tab.Screen name="Date Location" component={DateLocationScreen} />
          <Tab.Screen name="Final Details" component={FinalDetailsScreen} />
        </Tab.Navigator>
      </View>

    </View>
  );

}

const Stack = createStackNavigator();
class NewTask extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="NewTaskForm" component={NewTaskForm} />
        <Stack.Screen name="TaskCreated" component={TaskCreated} />
      </Stack.Navigator>
    );
  }
}

export default NewTask;

const styles = StyleSheet.create({
  textHeader: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 24,
    lineHeight: 24,
    margin: 20,
  },
  inputForm: {
    margin: 10,
    marginHorizontal: 25,
    height: 40,

    borderWidth: 1,
    borderColor: '#D6D6D6',
  },
  textForm: {
    marginLeft: 25,
    marginTop: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 11,
  },
  button1: {
    height: 48,
    margin: 10,
    marginRight: 20,
    backgroundColor: "#3FA7D6",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    marginLeft: 20,
    marginRight: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#828282"
  },
  textButton1: {
    color: "white",
  },
  textButton2: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  circle: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: "#3FA7D6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle1: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 24,
    marginVertical: 15

  },
  image2: {
    height: 40,
    width: 50,
    color: "black",
  },
});