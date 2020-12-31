import React, { useState } from "react";

import { Container, Row, Col } from 'react-bootstrap'

import AdminPlayers from './players'
import AdminClubs from './clubs'
import AdminLeagues from './leagues'
import AdminSeasons from './seasons'
import AdminTeams from './teams'
import AdminFixtures from './fixtures'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'

import Navbar from '../../components/NavBar'
import Stepper from '../../components/Stepper';
import Title from "../../components/Title";

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
               <Title>Admin Panel</Title>
               <nav className="main-nav" style={{ height: "14px" }}>
               <ul>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 0)}>
                     <a href='#'>Users</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 1)}>
                     <a href='#'>Clubs</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 2)}>
                     <a href='#'>Leagues</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 3)}>
                     <a href='#'>Seasons</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 4)}>
                     <a href='#'>Teams</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 0)}>
                     <a href='#'>Players</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 5)}>
                     <a href='#'>Fixtures</a>
                  </li>
                  <li className="nav-item nav-header" onClick={adminNavigationClick.bind(null, 5)}>
                     <a href='#'>Stats</a>
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
            <AdminClubs/>
         </div>
         <div>
            <AdminLeagues/>
         </div>
         <div>
            <AdminSeasons/>
         </div>
         <div>
            <AdminTeams/>
         </div>
         <div>
            <AdminPlayers/>
         </div>         
         <div>
            <AdminFixtures/>
         </div>
      </Stepper>
      </Container>
      <Footer/>
      </>
   )
}

export default Admin
