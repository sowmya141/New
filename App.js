import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {View,Text} from 'react-native'
import Home from "./src/screens/Home";
import AddItem from "./src/screens/AddItem";
import List from "./src/screens/List";

const Stack=createStackNavigator();

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen component={AddItem} name="AddItem"/>
        <Stack.Screen component={List} name="List"/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>
    //     App
    //   </Text>
    //   </View>
  )
}
export default App;