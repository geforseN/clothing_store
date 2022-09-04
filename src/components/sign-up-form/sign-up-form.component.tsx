import {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {AuthError, AuthErrorCodes} from  "firebase/auth";

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {signUpStart} from "../../store/user/user.action";

import {AccountSignUpForm, SignUpContainer} from "./sign-up-form.styles";
import {AccountExistsAsk, AccountAdvice} from "../../routes/authentication/authentication.styles";


const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(() => defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormFields({ ...formFields, [event.target.name]: event.target.value });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        alert(`User creation encountered an error: ${(error as AuthError).message}`);
      }
    }
  };


  return (
    <SignUpContainer>
      <AccountExistsAsk>Don't have an account?</AccountExistsAsk>
      <AccountAdvice>Sign up with your email and password</AccountAdvice>
      <AccountSignUpForm onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleInputChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleInputChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleInputChange}
          name='password'
          value={password}
        />
        {/*TODO inputs factory*/}
        {/*  <RequiredPasswordFormInput>
               label='Confirm Password'
               onChange={handleInputChange}
               value={confirmPassword}
               name?='confirmPassword'
             </RequiredPasswordFormInput>*/}
        {/*OR TODO */}
        {/*    const confirmPasswordInputProps = {
                 label: 'Confirm Password' OR make it with children prop
                 onChange: handleInputChange
                 value: confirmPassword
                 name: 'confirmPassword'
                                            <FormInput props={confirmPasswordInputProps} />
        />*/}
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleInputChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </AccountSignUpForm>
    </SignUpContainer>
  );
};

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


export default SignUpForm;