import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import { login } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/aut-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen ( { navigation } )
{
  const authContext = useContext( AuthContext );
  [ isAuthenticating, setisAuthenticating ] = useState( false );

  async function loginHandler ( { email, password } )
  {
    setisAuthenticating( true );
    try
    {
      const token = await login( email, password );
      authContext.authenticate( token );
      AsyncStorage.setItem( 'token', token );
    } catch ( error )
    {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later'
      );
    }
    setisAuthenticating( false );
  }

  if ( isAuthenticating )
  {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent isLogin onAuthenticate={ loginHandler } />;
}

export default LoginScreen;
