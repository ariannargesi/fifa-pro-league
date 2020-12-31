import React from "react";

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { setUserLoginStatus } from '../../redux/actions'
import { setUserConsole } from '../../redux/actions'

import useUser from '../../hooks/useUser'
import useConsole from '../../hooks/useConsole'

import Login from '../../layouts/Login'
import Signup from '../../layouts/Signup'
import SearchModal from '../../layouts/SearchModal'

const NavBar = (props) => {

  const platform = useConsole();
  const loggedIn = useUser();

  const logoutClickHandler = () => {
    localStorage.removeItem('user')
    props.setUserLoginStatus(false)
  }

  return (
    <header id="main-header" className="main-header">
      <div className="topbar">
        <Container>
          <Row>
            <Col>
              <ul className='topsocial'>
              <li><a href="https://www.facebook.com/FPC.League.1" target="_blank"><FontAwesomeIcon icon={faFacebook} size='lg' color='#4267B2' /></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} size='lg' color='#1DA1F2' /></a></li>
              <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} size='lg' color='#833AB4' /></a></li>
              <li><a href="https://discord.gg/SsRtYbZzRh" target="_blank"><FontAwesomeIcon icon={faDiscord} size='lg' color='#7289DA' /></a></li>
              </ul>
            </Col>
            <Col>
              <ul className='toplinks'>
                  {
                    loggedIn ?
                    <>
                    <li>Platform: {platform.name}</li>
                    <li>Hi, {JSON.parse(localStorage.getItem('user')).user.name}</li>
                    <li onClick={logoutClickHandler} ><Link to='/'>Log out</Link></li>
                    {
                      JSON.parse(localStorage.getItem('user')).user.role.includes("ADMIN") ?
                        <li><Link to='/admin'>Admin</Link></li>
                      :
                      <></>
                    }
                    </>
                    :
                    <>
                      <li><Login/></li>
                      <li><Signup/></li>
                    </>
                  }
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default connect(null, { setUserLoginStatus, setUserConsole })(NavBar)
