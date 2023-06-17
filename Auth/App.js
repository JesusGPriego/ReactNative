import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import IconButton from './components/ui/IconButton';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/aut-context';

const Stack = createNativeStackNavigator();

function AuthStack ()
{
  return (
    <Stack.Navigator
      screenOptions={ {
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      } }
    >
      <Stack.Screen name="Login" component={ LoginScreen } />
      <Stack.Screen name="Signup" component={ SignupScreen } />
    </Stack.Navigator>
  );
}

function AuthenticatedStack ()
{

  const authContext = useContext( AuthContext );

  return (
    <Stack.Navigator
      screenOptions={ {
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      } }
    >
      <Stack.Screen name="Welcome" component={ WelcomeScreen }
        options={ {
          headerRight: ( { tintColor } ) =>
            <IconButton
              icon='exit'
              color={ tintColor }
              size={ 24 }
              onPress={ authContext.logout }
            />
        } }
      />
    </Stack.Navigator>
  );
}

function Navigation ()
{

  const authContext = useContext( AuthContext );
  const isLoggedIn = authContext.isAuthenticated;



  return (
    <NavigationContainer>
      { !isLoggedIn ? <AuthStack /> : <AuthenticatedStack /> }
    </NavigationContainer>
  );
}

const Root = () => 
{
  const authContext = useContext( AuthContext );
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () =>
  {
    async function fetchToken ()
    {

      const storedToken = await AsyncStorage.getItem( 'token' );
      if ( storedToken )
      {
        authContext.authenticate( storedToken );
      }
      setTimeout( () =>
      {

        setIsLoading( false );
      }, 500 );
    }
    fetchToken();
  }, [] );
  if ( isLoading )
  {
    return <AppLoading />;
  }
  return <Navigation />;
};

export default function App ()
{

  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
