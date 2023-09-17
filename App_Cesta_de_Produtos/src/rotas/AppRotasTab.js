import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppRotasStack from './AppRotasStack';
import AppRotasStackMelhores from './AppRotasStackMelhores';

const Tab = createBottomTabNavigator();

function AppRotasTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: 20,
          },
        }}>
        <Tab.Screen name="Home" component={AppRotasStack} />
        <Tab.Screen
          name="Melhores Produtores"
          component={AppRotasStackMelhores}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppRotasTab;
