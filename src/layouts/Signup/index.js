import React, { useState } from "react";

import { Button } from "react-bootstrap";

import gql from 'graphql-tag'

import { useMutation } from '@apollo/react-hooks'

import { connect } from 'react-redux'
import { setUserLoginStatus } from '../../redux/actions'

import styled from "styled-components";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Stepper from '../../components/Stepper';

const mutations = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        name
        role
      }
    }
  }
`;

const Signup = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [signupError, setError] = useState('');
  const [signupMutation, { error }] = useMutation(mutations, {
    variables: {
      name,
      email, 
      password    
    }
  })
  
  const submitHandler = (e) => {
    e.preventDefault()

    signupMutation()
    .then(({data}) => {
      localStorage.setItem('user', JSON.stringify(data.signup))
      props.setUserLoginStatus(true)
      console.log(data);
      setCurrentStep(1)
    }).catch(e => {
      console.log(e.graphQLErrors);
      e.graphQLErrors.map(({ message }, i) => (
        setError(message)
      ))      
    })
  }

  return (
    <Modal title={"Sign up"}>
      <Stepper currentStep={currentStep} >
      <div className='signup-wrapper'>
        <form onSubmit={submitHandler}>
          <h4 className='title-white'>Create a new account</h4>
          <hr/>
          <h5 className='title-white'>{signupError}</h5>
          <Input
            type='text'
            value={name}
            placeholder='Username'
            onChange={ e => setName(e.target.value)}
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => {setEmail(e.target.value) }}
            />
          <Input
            type="password"
             placeholder="Password"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
             />
          <Input 
          type="password"
           placeholder="Confirm password" 
           value={confirmPassword}
           onChange={ (e) => { setConfirmPassword(e.target.value) } }
           />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
      <div className='signup-wrapper'>
          <h5 className='title-white'> We just sent you a confirmation email. Please check your inbox and finish the signup process </h5>
      </div>
      </Stepper>
    </Modal>
  );
};

export default connect(null, { setUserLoginStatus } )(Signup);
