import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components/native';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={Home} />
  </Tab.Navigator>
);

const Routes = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="App" component={AppNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
