import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/aut-context';
import { Alert } from 'react-native';


function SignupScreen ()
{

  const [ isAuthenticating, setisAuthenticating ] = useState();

  const authContext = useContext( AuthContext );

  async function signUpHandler ( { email, password } )
  {
    try
    {
      setisAuthenticating( true );
      const token = await createUser( email, password );
      authContext.authenticate( token );

    } catch ( error )
    {
      Alert.alert( 'Could not sign up', 'Please check your connection' );
    }
    setTimeout( () =>
    {

      setisAuthenticating( false );
    }, 500 );
  }

  if ( isAuthenticating )
  {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={ signUpHandler } />;
}

export default SignupScreen;
