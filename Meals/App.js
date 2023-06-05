import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator ()
{
  return (
    <Drawer.Navigator
      screenOptions={ {
        headerStyle: {
          backgroundColor: '#7d3a4f',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#1b1b17',
        },
        drawerContentStyle: {
          backgroundColor: '#7d3a4f',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#240a13',
        drawerActiveBackgroundColor: '#e395ad'
      } }
    >
      <Drawer.Screen
        name="Categories"
        component={ CategoriesScreen }
        options={ {
          title: 'All Categories',
          drawerIcon: ( { color, size } ) => (
            <Ionicons name="list" color={ color } size={ size } />
          )
        } }
      />
      <Drawer.Screen
        name="Favorites"
        component={ FavoriteScreen }
        options={ {
          title: 'Favorite Meals',
          drawerIcon: ( { color, size } ) => (
            <Ionicons name="star" color={ color } size={ size } />
          )
        } }
      />
    </Drawer.Navigator>
  );
}

export default function App ()
{
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer
        initialRouteName="MealsCategories"
      >
        <Stack.Navigator
          screenOptions={ {
            headerStyle: {
              backgroundColor: '#7d3a4f',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#1b1b17',
            }
          } }
        >
          <Stack.Screen
            name="Drawer"
            component={ DrawerNavigator }
            options={ {
              headerShown: false,
            } }
          />
          <Stack.Screen name="MealsOverview" component={ MealsOverviewScreen }
          />
          <Stack.Screen name="MealDetails" component={ MealDetailsScreen }
            options={ {
              title: 'Details',
            } }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} );
