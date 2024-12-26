/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomePage from './src/presentation/screens/HomeScreen';
import ProfileScreen from './src/presentation/screens/ProfileScreen';
import SearchStack from './src/presentation/SearchStack';
import {FavoritesProvider} from './src/context/FavoritesContext';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const iconSize = 30;
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              } else if (route.name === 'Search') {
                iconName = 'search';
              }

              return (
                <Icon
                  name={iconName || ''}
                  color={color || ''}
                  size={iconSize || ''}
                />
              );
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#9D9C9C',
            tabBarStyle: {
              backgroundColor: '#F6C700',
              height: 80,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingBottom: 15,
              paddingTop: 10,
            },
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
