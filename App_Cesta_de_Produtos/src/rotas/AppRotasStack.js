import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProdutorPage from '../telas/ProdutorPage';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

function AppRotasStack({ComponentePrincipal = Home}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={ComponentePrincipal} />
      <Stack.Screen name="ProdutorPage" component={ProdutorPage} />
    </Stack.Navigator>
  );
}

export default AppRotasStack;
