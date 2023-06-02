import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailsScreen from './src/screens/MealDetailsScreen';


const Stack = createNativeStackNavigator();


export default function App ()
{
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer initialRouteName="MealsCategories" >
        <Stack.Navigator
          screenOptions={ {
            headerStyle: {
              backgroundColor: '#7d3a4f',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#1b1b17',
            }
          } }>
          <Stack.Screen name="MealsCategories" component={ CategoriesScreen } options={ {
            title: 'Categories',
          } } />
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
