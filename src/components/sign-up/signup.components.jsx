import React from 'react';

import './signup.styles.scss';

import CustomButton from '../custom-buttons/custom-buttons.component';
import FormInput from '../form-input/form-input.components';

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert("password did not match")
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({ [name]: value} );
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h1 className = 'title'>I dont have an account</h1>
                <span>Signup with email and password</span>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput 
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    <FormInput 
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput 
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Conform Password'
                        required
                    />

                    <CustomButton type = 'submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;