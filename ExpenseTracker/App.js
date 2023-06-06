import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AllExpensesScreen from './src/screens/AllExpensesScreen';
import RecentExpensesScreen from './src/screens/RecentExpensesScreen';
import ModifyExpensesScreen from './src/screens/ModifyExpensesScreen';

export default function App ()
{

  const StackNavigator = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <StatusBar style="light" />
      <Provider store={ store }>
        <NavigationContainer>
          <StackNavigator.Navigator
            screenOptions={ {
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              statusBarColor: '#ffc400',
              headerStyle: {
                backgroundColor: '#ffc400',
              },
              contentStyle: {
                backgroundColor: '#ffe180'
              }
            } }
          >
            <StackNavigator.Screen
              name="AllExpenses"
              component={ AllExpensesScreen }
              options={ {
                title: 'All Expenses',
              } }
            />
            <StackNavigator.Screen
              name="ModifyExpenses"
              component={ ModifyExpensesScreen }
              options={ {
                title: 'Modify Expenses',
              } }
            />
            <StackNavigator.Screen
              name="RecentExpenses"
              component={ RecentExpensesScreen }
              options={ {
                title: 'Recent Expenses',
              } }
            />
          </StackNavigator.Navigator>
          {/* <BottomTab.Navigator>
          <BottomTab.Screen
            name='bottomAllExpenses'
            component={ AllExpensesScreen }
          />
        </BottomTab.Navigator> */}
        </NavigationContainer>
      </Provider>
    </>
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
