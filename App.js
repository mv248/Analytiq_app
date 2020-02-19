import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button,Image, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './Home';
import NewTask from './NewTask';
import AllProjects from './AllProjects';

function HomeScreen({navigation}){
  return (
    <Home navigation={navigation}/>
  );
}


function TasksScreen({navigation}) {
  return (
    <NewTask navigation={navigation}/>
  );
}
function ProjectsScreen({navigation}){
  return (
    <AllProjects/>
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

function ActivityScreen({navigation}){
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
        <Drawer.Screen name="Tasks" component={TasksScreen}options={{drawerIcon:({ tintColor }) => (
          <Image
            source={require("./Icons/task.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )}}/> 
        <Drawer.Screen name="Projects" component={ProjectsScreen}options={{drawerIcon:({ tintColor }) => (
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

// const Stack = createStackNavigator();


// function MyStack() {
//   return (
//   <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="PTO" component={Ptocheck} />
//       </Stack.Navigator>
        
//   );
// }


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
