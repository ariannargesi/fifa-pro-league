import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Title from "../../components/Title";

import useUser from '../../hooks/useUser'

const Wrapper = styled.div`
    background: rgb(255,81,0);
    background: linear-gradient(97deg, rgba(255,81,0,1) 0%, rgba(255,154,0,1) 100%);
    color: black;
    padding: 0.5rem;
`

const PartnerWrapper = styled.div`
    background: #EFF2F9;
`

const PartnerTitle = styled.div`
    text-align: center;
    color: black;
    padding: 0.5rem;
    font-style: italic;
    font-size: 2rem;
`

const PartnerIconsWrapper = styled.div`
    padding: 0.5rem;
    font-style: italic;
    font-size: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
`

const PartnerIcons = styled.div`
  @media (max-width: 767px) {
    padding: 0.5rem;
    font-style: italic;
    font-size: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
  }
`

const PartnerIcons1 = styled.div`
  @media (min-width: 768px) {
  float: right!important;
  display: block;
  width: 25%;
  margin: 0;
  }
`

const PartnerIcons2 = styled.div`
  @media (min-width: 768px) {
  float: left!important;
  display: block;
  width: 25%;
  margin: 0;
  }
`

const Info = styled.div`
    padding: 20px;
    text-transform: uppercase;
    font-size: 0.7rem;
`

const Footer = () => {
  const user = useUser();

    return (
        <div class="footer">
          <Wrapper style={{padding: '1rem'}}>
          </Wrapper>

          <PartnerWrapper>
          <Container>
            <Row>
              <Col md={12} sm={7}>
                <PartnerTitle>FPC Partner:</PartnerTitle>

              </Col>
              </Row>
              <Row>
              <Col md={6} sm={12}>
                <a href="/" target="_blank"><PartnerIcons><PartnerIcons1><img src={'/fpchub2.svg'}/></PartnerIcons1></PartnerIcons></a>
              </Col>
              <Col md={6} sm={12}>
                <a href="/" target="_blank"><PartnerIcons><PartnerIcons2><img src={'/fpctrading2.svg'}/></PartnerIcons2></PartnerIcons></a>
              </Col>
            </Row>
          </Container>
          <hr></hr>
          </PartnerWrapper>


        <div class="logo-navbar">
        <Container>
          <Row>
            <Col md={4} sm={2}>
              <Title titleBoxBlack>FPC League</Title>
            </Col>
            <Col md={8} sm={10}>
            <nav class="main-nav">
              <ul>
                <li class='nav-item nav-header play'><Link to='/'>Home</Link></li>
                <li class='nav-item nav-header'><Link to='/league'>League</Link></li>
                {
                  user ?
                  <>
                  <li class='nav-item nav-header'><Link to='/playerhub'>Player Hub</Link></li>
                  <li class='nav-item nav-header'><Link to='/clubhub'>My Club</Link></li>
                  </>
                  :
                  <>
                  </>
                }

              </ul>
            </nav>
            </Col>
            <Col md={12}>
            <Info><p>FPC League is not affiliated with or sponsored by Electronic Arts INC. or its Licensors</p></Info>
            </Col>
          </Row>
        </Container>
      </div>

      </div>
    )
}

export default Footer
