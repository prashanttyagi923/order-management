import cookie from 'react-cookies'
import Cookies from 'universal-cookie';

import { useHistory } from "react-router-dom";
const cookies = new Cookies();
export const refreshTokenSetup = (res) =>{
    // const history = useHistory();
    
//     const expires = new Date()
//    expires.setSeconds(Date.now() + res.tokenObj.expires_in)
cookies.set('tokenId', res.tokenObj.access_token, { path: '/' });
    
    let refreshTime = res.tokenObj.expires_in - 10;
    const refreshToken = async() => {
        const authRes = await res.reloadAuthResponse();
        cookies.set(
            'tokenId',
            authRes.access_token,
            {
            //   expires,
              maxAge: authRes.expires_in,
              httpOnly: true
            }
          )
        console.log('reload sucess' + authRes)
    }
    setInterval(refreshToken, refreshTime*1000);
    // history.push("/home")
}



export const getIsLoggedIn = () => {
    const token = cookies.get('tokenId');
    console.log('I got token')
    console.log(token);
 //return true;
    if(token){
        return true;
    }
    return false;
}