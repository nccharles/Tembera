import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from "../components/TabBar/TabBarIcon"
import TabBar from "../components/TabBar/TabBar"
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Locations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
    />
  ),
};
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Booked',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="bookmarks"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
},
  {
    tabBarComponent: TabBar,
  }
);
