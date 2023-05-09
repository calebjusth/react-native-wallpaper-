import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import  WallpaperScreen from './screens/WallpaperScreen';

//Screen names
const homeName = "Category";
const detailsName = "Updates";
const settingsName = "Settings";
const  wallpaperScreen = 'Wallpapers';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'shapes-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'star-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';

            } else if (rn === wallpaperScreen) {
              iconName = focused ? 'wallpaper' : 'shapes-outline';
            }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 20, height: 80}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={wallpaperScreen} component={WallpaperScreen} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default MainContainer;