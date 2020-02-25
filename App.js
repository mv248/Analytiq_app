import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button,Image, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './Home';
import NewTask from './NewTask';
import AllProjects from './AllProjects';
import AllTasks from './AllTasks';
import Activity from './Activity';
import Calls from './Activity';


function HomeScreen({navigation}){
  return (
    <Home navigation={navigation}/>
  );
}

function CallsScreen({navigation}){
  return (
    <Calls navigation={navigation}/>
  );
}
function TasksScreen({navigation}) {
  return (
    <NewTask navigation={navigation}/>
  );
}
function ActivityScreen({navigation}) {
  return (
    <Activity navigation={navigation}/>
 );
}function ProjectsScreen({navigation}){
  return (
    <AllProjects navigation={navigation}/>
  );
}
function ChecklistScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={()=>navigation.navigate('Home')}
      />
    </View>
  );
}
function TimesheetScreen({navigation}){
  return (
    <AllTasks navigation={navigation}/>
  );
}
function SettingsScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={()=>navigation.navigate('Home')}
      />
    </View>
  );
}


function CustomDrawerContent(props) {

  return (
    
    <DrawerContentScrollView {...props} >
      <View style={styles.workerProfile}>
        <Text style={styles.workerName}>Worker Name</Text>
        <Text>Employee ID</Text>

      </View>
      <DrawerItemList {...props} style={{flex:3}}/>
      <View style={{flex:1,borderTopColor:'#95D0EB',borderTopWidth:1}}>
        <DrawerItem
          label="Settings"
         onPress={() => props.navigation.navigate('Projects')}
         icon={({ tintColor }) => (
          <Image
            source={require("./Icons/settings.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator style={{flex:1}} drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/settings.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
         <Drawer.Screen name="Calls" component={CallsScreen} options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/settings.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
        <Drawer.Screen name="All Tasks" component={TasksScreen}options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/project.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
        <Drawer.Screen name="Checklist" component={ChecklistScreen} options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/checkList.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
        <Drawer.Screen name="Timesheet" component={TimesheetScreen} options={{drawerIcon:({ tintColor }) => (
          <ImageBackground
            source={require("./Icons/clockCircle.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, alignItems:'center',justifyContent:'center', tintColor: tintColor }}
          >
           <Image
            source={require("./Icons/clockLeg.png")}
            resizeMode="contain"
            style={{ width: 10, height: 10, marginLeft:3,tintColor: tintColor }}
          ></Image>  
          </ImageBackground>
        )}}/>
        <Drawer.Screen name="Activity" component={ActivityScreen}options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/activity.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workerProfile:{
    height:80, 
    backgroundColor:'#EBF8FF',
    alignItems:'center',
    justifyContent: 'center'
  },
  workerName:{
    fontStyle: 'normal',
      fontWeight: '500',
      fontSize:15,
      color: 'rgba(0, 0, 0, 0.87)',
      lineHeight:15,
  }
});
