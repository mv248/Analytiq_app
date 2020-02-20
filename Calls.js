import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Picker, Text, TextInput, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'
import { createStackNavigator } from '@react-navigation/stack';
import PhoneInput from 'react-phone-number-input'

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
                    <Text style={styles.subtitle1}>Contact Created</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight
                            style={[styles.button1, styles.button1]}
                            onPress={() => { this.props.navigation.navigate("Personal Details") }}
                        >
                            <Text style={[styles.textButton1]}>Back to Home</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const picker = { borderBottomColor: 'red', borderWidth: 0 };
function CallLog({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={styles.textForm}>Caller 1</Text>
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
                        marginLeft: 280,
                    },
                    dateInput: {
                        marginLeft: 0
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
            />
        )
    }
}

function AddContact({ navigation }) {

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
        { label: 'Other(Select worker)', value: 1 }
    ];
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={styles.textForm}>PHONE</Text>
                <TextInput keyboardType={'phone-pad'} style={styles.inputForm} />
                <Text style={styles.textForm}>EMAIL</Text>
                <TextInput style={styles.inputForm} />
                <Text style={styles.textForm}>FIRST NAME</Text>
                <TextInput style={styles.inputForm} />
                <Text style={styles.textForm}>LAST NAME</Text>
                <TextInput style={styles.inputForm} />
                <Text style={styles.textForm}>ADDRESS LINE 1</Text>
                <TextInput style={styles.inputForm} />
                <Text style={styles.textForm}>ADDRESS LINE 2</Text>
                <TextInput style={styles.inputForm} />
                <Text style={styles.textForm}>CITY</Text>
                <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
                    placeholder='Select City'
                    textColor='rgba(0, 0, 0, 0.38)'
                    fontSize={13}
                    data={data}
                    animationDuration={0}
                    baseColor={"rgba(0, 0, 0, 0.6)"}
                    inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
                    pickerStyle={{}}
                />
                <Text style={styles.textForm}>STATE</Text>
                <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
                    placeholder='Select State'
                    textColor='rgba(0, 0, 0, 0.38)'
                    fontSize={13}
                    data={data}
                    animationDuration={0}
                    baseColor={"rgba(0, 0, 0, 0.6)"}
                    inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
                    pickerStyle={{}}
                />
                <Text style={styles.textForm}>ZIP</Text>
                <TextInput style={styles.inputForm} />

                <TouchableHighlight
                    style={{ margin: 25, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => navigation.navigate('Other Details')}
                >
                    <Text style={{ color: "white", fontSize: 14 }}>Next Step</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}

function OtherDetails({ navigation }) {

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
        { label: 'Other(Select worker)', value: 1 }
    ];
    return (

        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={styles.textForm}>DESIGNATION</Text>
                <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
                    placeholder='Select Designation'
                    textColor='rgba(0, 0, 0, 0.38)'
                    fontSize={13}
                    data={data}
                    animationDuration={0}
                    baseColor={"rgba(0, 0, 0, 0.6)"}
                    inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
                    pickerStyle={{}}
                />
                <Text style={styles.textForm}>STATUS</Text>
                <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
                    placeholder='Select Status'
                    textColor='rgba(0, 0, 0, 0.38)'
                    fontSize={13}
                    data={data}
                    animationDuration={0}
                    baseColor={"rgba(0, 0, 0, 0.6)"}
                    inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
                    pickerStyle={{}}
                />
                <Text style={styles.textForm}>TYPE</Text>
                <Dropdown containerStyle={{ margin: 10, marginHorizontal: 25, borderWidth: 1, borderColor: "#D6D6D6", height: 40, justifyContent: "center" }}
                    placeholder='Select Type'
                    textColor='rgba(0, 0, 0, 0.38)'
                    fontSize={13}
                    data={data}
                    animationDuration={0}
                    baseColor={"rgba(0, 0, 0, 0.6)"}
                    inputContainerStyle={{ borderBottomColor: "transparent", marginBottom: 15, marginHorizontal: 10 }}
                    pickerStyle={{}}
                />
                <Text style={styles.textForm}>FIRST CONTACT</Text>
                <MyDatePicker
                />
                <Text style={styles.textForm}>LAST CONTACT</Text>
                <MyDatePicker
                />

                <TouchableHighlight
                    style={{ margin: 25, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => navigation.navigate('TaskCreated')}
                >
                    <Text style={{ color: "white", fontSize: 14 }}>Create Contact</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
function Contacts({ navigation }) {
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

        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                <View style={{ alignSelf: 'flex-end' }}><Text style={styles.textHeader}>New Contact</Text>
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
                    <Tab.Screen name="Personal Details" component={AddContact} />
                    <Tab.Screen name="Other Details" component={OtherDetails} />

                </Tab.Navigator>
            </View>

        </View>

    );
}
function PhoneDial({ navigation }) {
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

        <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>
        <TextInput keyboardType={'phone-pad'} style={styles.inputForm} />
        
        <TouchableHighlight
            style={{ margin: 25, backgroundColor: '#3FA7D6', borderRadius: 4, height: 40, alignItems: 'center', justifyContent: 'center', 
        }}
            onPress={() => navigation.navigate('Personal Details')}
        >
            <Text style={{ color: "white", fontSize: 14 }}>DIAL</Text>
        </TouchableHighlight>
    </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function NewTaskForm({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                <View style={{ alignSelf: 'flex-end' }}><Text style={styles.textHeader}>Calls</Text>
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
                    <Tab.Screen name="Call Log" component={CallLog} />
                    <Tab.Screen name="Contacts" component={Contacts} />
                    <Tab.Screen name="Dialer" component={PhoneDial} />
                </Tab.Navigator>
            </View>

        </View>
    );

}

const Stack = createStackNavigator();
class Calls extends Component {
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="NewTaskForm" component={NewTaskForm} />
                <Stack.Screen name="TaskCreated" component={TaskCreated} />
            </Stack.Navigator>
        );
    }
}

export default Calls;

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