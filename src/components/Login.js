import React from "react";
import { auth } from '../firebase';
import { GoogleAuthProvider } from "firebase/auth";
import google from './google.png'
import {signInWithPopup} from "firebase/auth";

const Login = () => {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div id="login-page">
            <div id="login-card">
                <img src="../../Logo.svg" alt="."/>
                <h2>Welcome to HiChat!</h2>
                <div
                    className="login-button google"
                    onClick={signInWithGoogle}
                >
                    <img src={google} alt="."></img>
                    <p>Sign In with Google</p>
                </div>
            </div>
        </div>
    );
}

export default Login;

