import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App ()
{
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={ {
          headerStyle: { backgroundColor: '#410a4f' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#ce93dd',
          drawerActiveTintColor: '#3d024b',
          drawerStyle: {
            backgroundColor: '#cccccc',
          },
        } }>
        <Drawer.Screen
          name="Welcome"
          component={ WelcomeScreen }
          options={ {
            drawerLabel: 'Home',
            drawerIcon: ( { color, size } ) => (
              <Ionicons name="home" color={ color } size={ size } />
            )
          } }
        />
        <Drawer.Screen
          name="User"
          component={ UserScreen }
          options={ {
            drawerLabel: 'User',
            drawerIcon: ( { color, size } ) => (
              <Ionicons name="person" color={ color } size={ size } />
            )
          } }
        />
      </Drawer.Navigator> */}
      <Tab.Navigator
        screenOptions={ {
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b'
        } }
      >
        <Tab.Screen
          name="Home"
          component={ WelcomeScreen }
          options={ {
            // drawerLabel: 'User',
            tabBarIcon: ( { color, size } ) => (
              <Ionicons name="home" color={ color } size={ size } />
            )
          } }
        />
        <Tab.Screen
          name="User"
          component={ UserScreen }
          options={ {
            // drawerLabel: 'User',
            tabBarIcon: ( { color, size } ) => (
              <Ionicons name="person" color={ color } size={ size } />
            )
          } }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
