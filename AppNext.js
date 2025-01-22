// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  faBars,
  faAngleLeft,
  faTrash,
  faCheckSquare,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import HomeScreenfff from './src/screens/HomeScreenfff';
import ShopScreenfff from './src/screens/ShopScreenfff';
import BroadcastsScreenfff from './src/screens/BroadcastsScreenfff';
import ContactScreenfff from './src/screens/ContactScreenfff';
import RezervScreenfff from './src/screens/RezervScreenfff';
import CartScreenfff from './src/screens/CartScreenfff';

library.add(faBars, faAngleLeft, faTrash, faCheckSquare, faCartPlus);

const Stack = createNativeStackNavigator();

function AppNext() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homefff"
          component={HomeScreenfff}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shopfff"
          component={ShopScreenfff}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcastsfff"
          component={BroadcastsScreenfff}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contactfff"
          component={ContactScreenfff}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Rezervfff"
          component={RezervScreenfff}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Cartfff"
          component={CartScreenfff}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNext;
