import React from 'react';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from "react-router-dom";
import { refreshTokenSetup } from "../utils/tokenService";

const clientId = '665250660263-qq3d2b3771j1v4247c4bndg5i716i0vv.apps.googleusercontent.com';

function LoginButton(){
    const history = useHistory();

    const onSuccess = (res) => {
        // console.log('login success');
        // console.log(res.profileObj);
        // console.log(res)
        refreshTokenSetup(res);
        history.push("/home")
    }
    const onFailure = (res) => {
        console.log('login failed');
    }
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="SignIn With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )

}
export default LoginButton;