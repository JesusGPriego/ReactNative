import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AllExpensesScreen from './src/screens/AllExpensesScreen';
import RecentExpensesScreen from './src/screens/RecentExpensesScreen';
import ModifyExpensesScreen from './src/screens/ModifyExpensesScreen';
import IconButton from './src/components/UI/IconButton';
import { Ionicons } from '@expo/vector-icons';
import colors from './src/utils/constants/colors';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = ( { navigation } ) =>
{

  const onPlusPressHandler = () =>
  {
    navigation.navigate( 'ModifyExpenses' );
  };

  return (
    <BottomTab.Navigator
      screenOptions={ {
        headerStyle: {
          backgroundColor: colors.main
        },
        headerTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.main,
          borderTopWidth: 2,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.grey,
        headerRight: ( { tintColor } ) =>
          <IconButton
            name='add'
            size={ 24 }
            color={ tintColor }
            onPress={ onPlusPressHandler }
            text={ 'Add' }
          />
      } }
    >
      <BottomTab.Screen
        name='recentExpenses'
        component={ RecentExpensesScreen }
        options={ {
          title: 'Recent Expenses',
          tabBarLabel: 'Recents',
          tabBarIcon: ( { color, size } ) =>
          {
            return (
              <Ionicons
                name='hourglass'
                color={ color }
                size={ size }
              />
            );
          }
        } }
      />
      <BottomTab.Screen
        name='allExpenses'
        component={ AllExpensesScreen }
        options={ {
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ( { color, size } ) =>
          {
            return (
              <Ionicons
                name='calendar'
                color={ color }
                size={ size }
              />
            );
          }
        } }
      />
    </BottomTab.Navigator>
  );
};

export default function App ()
{


  return (
    <>
      <StatusBar style="light" />
      <Provider store={ store }>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={ {
              headerTintColor: 'white',
              headerTitleAlign: 'center',
              statusBarColor: colors.main,
              headerStyle: {
                backgroundColor: colors.main,
              },
              contentStyle: {
                backgroundColor: colors.background
              }
            } }
          >
            <Stack.Screen
              name='ExpensesOverview'
              component={ ExpensesOverview }
              options={ { headerShown: false } }
            />
            < Stack.Screen
              name="ModifyExpenses"
              component={ ModifyExpensesScreen }
              options={ {
                presentation: 'modal',
                title: 'Manage Expenses',
              } }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
} );
