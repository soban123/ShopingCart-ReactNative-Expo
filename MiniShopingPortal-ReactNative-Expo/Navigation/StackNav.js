import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import Cards from '../pages/Cards'
import About from '../pages/About'
import Header from '../pages/Header'
const screens = {
 
 
 
  Home:{
    screen: Cards ,
    navigationOptions:({navigation})=>{
     return {
       headerTitle: () => <Header navigation={navigation} title={'Products'} /> 
    }
    }

    
      
      
    
  } ,
  About:{
    screen: About,
    navigationOptions:{
      
      headerTitle : 'Add To Cart'
    }
  } ,
} 


const Stack = createStackNavigator(screens , {
  defaultNavigationOptions :{
    headerStyle: {backgroundColor:'indigo'  } ,
    headerTintColor: 'white'
  }
});

export default Stack;
