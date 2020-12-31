import React, { useState } from "react";

import { Container, Row, Col } from 'react-bootstrap'

import Navbar from '../../components/NavBar'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'

import Stepper from '../../components/Stepper';

const AdminPlayers = (props) => {
   return (
      <>
      <h1>Players</h1>
      <p>Player table goes here!</p>
      </>
   )
}

const AdminTeams = (props) => {
   return (
      <>
      <h1>Teams</h1>
      <p>Teams table goes here!</p>
      </>
   )
}

const Admin = (props) => {

   const [currentStep, setCurrentStep] = useState(0);

   const adminNavigationClick = (id) => {
      setCurrentStep(id)
   }

   const AdminNav = (props) => {
      return (
         <div className="logo-navbar category-navbar">
         <Container>
            <Row>
               <Col md={12} sm={7}>
               <nav className="main-nav" style={{ height: "14px" }}>
               <ul>
                  <li className="nav-item" onClick={adminNavigationClick.bind(null, 0)}>
                     <a>Players</a>
                  </li>
                  <li className="nav-item" onClick={adminNavigationClick.bind(null, 1)}>
                     <a>Teams</a>
                  </li>
               </ul>
               </nav>
               </Col>
            </Row>
         </Container>
         </div>
      )
   }

   return (
      <>
      <Navbar/>
      <Header/>
      <AdminNav/>
      <Container>
      <Stepper currentStep={currentStep} >
         <div>
            <AdminPlayers/>
         </div>
         <div>
            <AdminTeams/>
         </div>
      </Stepper>
      </Container>
      <Footer/>
      </>
   )
}

export default Admin
