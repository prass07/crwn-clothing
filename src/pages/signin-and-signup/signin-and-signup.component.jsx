import React from 'react';

import './signin-and-signup.styles.scss';

import SignIn from '../../components/signin/signin.components';
import SignUp from '../../components/sign-up/signup.components';

const  SignInandSignUpPage = () => {
    return(
        <div className = 'signin-and-signup'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInandSignUpPage;