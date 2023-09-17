import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppRotasStack from './AppRotasStack';
import AppRotasStackMelhores from './AppRotasStackMelhores';

const Tab = createBottomTabNavigator();

function AppRotasTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
