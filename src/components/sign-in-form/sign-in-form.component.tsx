import {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {AuthError, AuthErrorCodes} from  "firebase/auth";

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";

import {AccountAdvice, AccountExistsAsk} from "../../routes/authentication/authentication.styles";
import {AccountSignInForm, ButtonsContainer, SignInContainer} from "./sign-in-form.styles";


const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormFields({...formFields, [event.target.name]: event.target.value});

  const signInWithGoogle = async () => dispatch(googleSignInStart());

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('incorrect password for email');
          break;
        case AuthErrorCodes.USER_DELETED:
          alert('no user associated with this email');
          break;
        default:
          alert(`User authentication encountered an error: ${(error as AuthError).message}`);
          console.log(error);
      }
    }
  };



  return (
    <SignInContainer>
      <AccountExistsAsk>Already have an account?</AccountExistsAsk>
      <AccountAdvice>Sign in with your email and password</AccountAdvice>
      <AccountSignInForm onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' styleType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </AccountSignInForm>
    </SignInContainer>
  );
};


const defaultFormFields = {
  email: '',
  password: '',
};

export default SignInForm;