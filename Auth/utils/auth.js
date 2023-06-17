import axios from "axios";

const API_KEY = 'AIzaSyBkm-Z28I6_dBsX_-tG8F57YYEZpe2JxDc';



const ENDPOINT = 'https://identitytoolkit.googleapis.com/v1/accounts:';

async function authenticate ( mode, email, password )
{

    const url = `${ENDPOINT}${mode}?key=${API_KEY}`;
    const response = await axios.post(
        url,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
    return response.data.idToken;
}

export function createUser ( email, password )
{
    return authenticate( 'signUp', email, password );
}
export function login ( email, password )
{
    return authenticate( 'signInWithPassword', email, password );
}