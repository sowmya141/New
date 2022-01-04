import React from 'react';
import {View,Text, Button} from 'react-native';

const Home = ({navigation})=>{
   return(
       <View>
           <Text>
               Home Screen
           </Text>
           <Button title='Add an Item' 
            onPress={()=>navigation.navigate('AddItem')}>

           </Button>
           <Button title='List of Items' 
            onPress={()=>navigation.navigate('List')}
            color='green'>
                
           </Button>
       </View>
   )
}
export default Home;