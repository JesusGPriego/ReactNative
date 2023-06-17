import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from "../store/aut-context";

function WelcomeScreen ()
{

  const [ fetchedMessage, setFetchedMessage ] = useState();
  const authContext = useContext( AuthContext );


  useEffect( () =>
  {
    axios.get( `https://auth-e0afe-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${authContext.token}` )
      .then( ( response ) => setFetchedMessage( response.data ) ).catch( error => console.log( 'error.data ->', error.data ) );

  }, [] );
  return (
    <View style={ styles.rootContainer }>
      <Text style={ styles.title }>Welcome!</Text>
      <Text>{ fetchedMessage }</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create( {
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
} );
