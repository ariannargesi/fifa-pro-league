import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'

import useUser from '../../hooks/useUser'
import useConsole from '../../hooks/useConsole'

import { setUserConsole } from '../../redux/actions'

const Header = (props) => {
  
  const platform = useConsole();
  const user = useUser();
  const [currentStep, setCurrentStep] = useState(platform.id); 

  const handleClick = (index) => {
    const newPlatform = {
      id: index,
      name: index ? "Xbox" : "PS"
    };
    console.log(newPlatform);
    setCurrentStep(index)
    localStorage.setItem('platform', JSON.stringify(newPlatform));
    props.setUserConsole(newPlatform)
  }

  const Hey = {
    fisrt: <h1>Hello</h1>
  }

  return (
      <div className="logo-navbar">
      <Container>
        <Row>
          <Col md={1} sm={5}>
            <div className="logo"><a href='/'><img src={'/fpc-logo.svg'}/></a></div>
          </Col>
          <Col md={11} sm={7}>
          <nav className="main-nav">
            <ul>
              <li className='nav-item nav-header play'><Link to='/'>Home</Link></li>
              <li className='nav-item nav-header'><Link to='/'>News</Link></li>
              <li className='nav-item nav-header'><Link to='/league'>League</Link></li>
              {
                user ?
                <>
                <li className='nav-item nav-header'><Link to='/playerhub'>Player Hub</Link></li>
                <li className='nav-item nav-header'><Link to='/clubhub'>My Club</Link></li>
                </>
                :
                <>
                </>
              }
            </ul>
            <ul>
            {
              user ?
              <>
              <li className={`nav-item nav-header platfrom ${currentStep===0 ? 'active' : ''}`} onClick={ handleClick.bind(null, 0) }>
                <a href='#'>
                  <div className="console-box-img">
                    <img src={'/ps4.png'}/>
                  </div>
                </a>
              </li>
              <li className={`nav-item nav-header platfrom ${currentStep===1 ? 'active' : ''}`} onClick={ handleClick.bind(null, 1) }>
                <a href='#'>
                  <div className="console-box-img">
                    <img src={'/xbox.png'}/>
                  </div>
                </a>
              </li>
              </>
              :
              <>
              </>
            }
            <li className="nav-item nav-header join-discord"><Link to='/discord'>Discord</Link></li>
            </ul>              
          </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default connect(null, { setUserConsole })(Header);

