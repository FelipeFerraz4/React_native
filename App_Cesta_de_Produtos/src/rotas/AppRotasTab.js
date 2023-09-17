import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppRotasStack from './AppRotasStack';
import AppRotasStackMelhores from './AppRotasStackMelhores';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

function AppRotasTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            let Icon = Home;
            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon color={color} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {
            fontSize: 20,
          },
        })}>
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
