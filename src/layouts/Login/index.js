import React, { useState } from "react";

import { Button } from "react-bootstrap";

import gql from "graphql-tag";

import { useMutation } from "@apollo/react-hooks";

import { connect } from 'react-redux'
import { setUserLoginStatus } from '../../redux/actions'

import styled from "styled-components";

import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Stepper from '../../components/Stepper';

//import Signup from "../../layouts/Signup";

const mutations = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          name
          role
        }
      }
    }
`;

const Wrapper = styled.div`
    width: 400px;
    height: 350px;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    boxShadow: "0px 0px 5px 5px #eee;
`;

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentStep, setCurrentStep] = useState(0); 
  const [name, setName] = useState('');
  const [loginError, setError] = useState('');
  const [loginMutation, { error }] = useMutation(mutations, {
    variables: {
      email, 
      password    
    }
  })
  
  const submitHandler = e => {
    e.preventDefault()
    loginMutation().then(({data}) => {
      if(data.login) {
        localStorage.setItem('user', JSON.stringify(data.login))
        props.setUserLoginStatus(true);
        setCurrentStep(1);
        setName(data.login.user.name);
      }
      console.log(data);
    }).catch(e => {
      console.log("ERROR", e.graphQLErrors);
      e.graphQLErrors.map(({ message }, i) => (
        setError(message)
      ))
    })
  }

  return (
    <Modal title={"Login"}>
      <Stepper currentStep={currentStep} >
      <div className='signup-wrapper'>
        <form action="" onSubmit={submitHandler} >
          <h4 className="title-white">Log back in</h4>
          <hr />
          <h5 className='title-white'>{loginError}</h5>
          <Input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          />
          <Input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
      <div className='signup-wrapper'>
          <h5 className='title-white'>Welcome {name}</h5>
      </div>      
      </Stepper>
    </Modal>
  );
};

export default connect(null, { setUserLoginStatus })(Login);
