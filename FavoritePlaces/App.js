import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './components/colors/colors';
import MapScreen from './screens/Map';
import { useEffect, useCallback, useState } from 'react';
import { init } from './utils/db';
import * as SplashScreen from 'expo-splash-screen';
import PlaceDetails from './screens/PlaceDetails';
const Stack = createNativeStackNavigator();


export default function App ()
{
  const [ dbInitialized, setDbInitialized ] = useState( false );

  useEffect( () =>
  {
    const prepare = async () =>
    {
      try
      {
        await SplashScreen.preventAutoHideAsync();
        init();
      } catch ( e )
      {
        console.warn( e );
      } finally
      {
        setTimeout( () =>
        {
          setDbInitialized( true );
        }, 250 );
      }
    };
    prepare();
  }, [] );

  const onLayoutRootView = useCallback(
    async () =>
    {
      if ( dbInitialized )
      {
        await SplashScreen.hideAsync();
      }
    },
    [ dbInitialized ]
  );

  if ( !dbInitialized ) return null;

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer onReady={ onLayoutRootView }>
        <Stack.Navigator
          screenOptions={ {
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          } }
        >
          <Stack.Screen name='AllPlaces' component={ AllPlaces }
            options={ ( { navigation } ) => ( {
              title: 'Your favorite places',
              headerRight: ( { tintColor, } ) => <IconButton
                color={ tintColor }
                size={ 24 }
                name='add'
                onPress={ () => navigation.navigate( 'AddPlace' ) }
              />
            } ) }
          />
          <Stack.Screen name='AddPlace' component={ AddPlace }
            options={ {
              title: 'Add New Place'
            } }
          />
          <Stack.Screen name='MapScreen' component={ MapScreen }
            options={ {
              title: 'Map'
            } }
          />
          <Stack.Screen name='PlaceDetail' component={ PlaceDetails }
            options={ {
              title: 'Place Detail'
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
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
} );
