import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import React from "react";
import {
  Image, StyleSheet, Text, View, Alert
} from "react-native";
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const art = require("./assets/art.png");
const mile = require("./assets/mile.png");
const pier = require("./assets/pier.png");
const water = require("./assets/water.png");
const willis = require("./assets/willis.png");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {

  function HomeScreen({ navigation }) {
    return (
      <View style={styles.viewStyle}>
        <Image source={art} style={styles.pic}></Image>
        <Button info style={styles.button} onPress={() => handleButtonPress('art')}>More Information</Button>
      </View>
    );
  }
  
  function MileScreen({ navigation }) {
    return (
      <View style={styles.viewStyle}>
        <Image source={mile} style={styles.pic}></Image>
        <Button info style={styles.button} onPress={() => handleButtonPress('mile')}>More Information</Button>
      </View>
    );
  }
  function PierScreen({ navigation }) {
    return (
      <View style={styles.viewStyle}>
        <Image source={pier} style={styles.pic}></Image>
        <Button info style={styles.button} onPress={() => handleButtonPress('pier')}>More Information</Button>
      </View>
    );
  }
  function WaterScreen({ navigation }) {
    return (
      <View style={styles.viewStyle}>
        <Image source={water} style={styles.pic}></Image>
        <Button info style={styles.button} onPress={() => handleButtonPress('water')}>More Information</Button>
      </View>
    );
  }
  function WillisScreen({ navigation }) {
    return (
      <View style={styles.viewStyle}>
        <Image source={willis} style={styles.pic}></Image>
        <Button info style={styles.button} onPress={() => handleButtonPress('willis')}>More Information</Button>
      </View>
    );
  }
  
  function handleButtonPress(button){
    switch(button) {
      case 'willis':
        WebBrowser.openBrowserAsync('https://www.willistower.com/');
        break;
      
      case 'art':
        WebBrowser.openBrowserAsync('https://www.artic.edu/');
        break;
  
      case 'mile':
        WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/');
        break;
  
      case 'pier':
        WebBrowser.openBrowserAsync('https://navypier.org/');
        break;

      case 'water':
        WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html');
        break;
  
      default:
        Alert.alert("Site not found");
    
      }
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={HomeScreen}/>
        <Drawer.Screen name="Magnificent Mile" component={MileScreen}/>
        <Drawer.Screen name="Navy Pier" component={PierScreen}/>
        <Drawer.Screen name="Water Tower" component={WaterScreen}/>
        <Drawer.Screen name="Willis Tower" component={WillisScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );

  
}

const styles = StyleSheet.create({
  container:{
    marginTop: 130,
  },
  pic:{
    width: 240,
    height: 360,
  },
  viewStyle:{
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  },
  button:{
    marginTop: 10,
  }
});
export default App;
