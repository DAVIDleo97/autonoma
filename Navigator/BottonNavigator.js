import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Contador from '../Screens/Contador';
import Datos from '../Screens/Datos';
import Personajes from '../Screens/Personajes';
import Peliculas from '../Screens/Peliculas';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contador" component={Contador} 
      options={{tabBarIcon: ({color, size})=>
      <AntDesign name="plus" size={24} color="black" />
      }}/>
      
      <Tab.Screen name="Datos" component={Datos} 
      options={{tabBarIcon: ({color, size})=>
      <AntDesign name="form" size={24} color="black" />
      }}/>
      <Tab.Screen name="Personajes" component={Personajes} 
      options={{tabBarIcon: ({color, size})=>
      <AntDesign name="user" size={24} color="black" />
      }}/>
      <Tab.Screen name="Peliculas" component={Peliculas} 
      options={{tabBarIcon: ({color, size})=>
      <AntDesign name="youtube" size={24} color="black" />
      }}/>
    </Tab.Navigator>
  );
}

export default function BottonTab(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}