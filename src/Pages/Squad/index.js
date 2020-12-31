import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../../layouts/Layout'
import Sidebar from '../../components/FormationSidebar'
import Formation from '../../components/Formation'
import Title from "../../components/Title";
import Tile from "../../components/Tile";
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <Layout>
        <div className="logo-navbar category-navbar">
          <Container>
          <Title>FPC Man United</Title>
            <Row>
              <Col md={12} sm={7}>
                <nav className="main-nav" style={{ height: "60px" }}>
                  <ul>
                    <li class="nav-item second-nav-item"> <Link to="/clubhub" activeClassName='is-active'>Central</Link></li>
                    <li class='nav-item second-nav-item nav-header-two'><Link to='/inbox' activeClassName='is-active'>Inbox</Link></li>
                    <li class='nav-item second-nav-item nav-header-two active'><Link to='/squad' activeClassName='is-active'>Squad</Link></li>
                    <li class='nav-item second-nav-item nav-header-two'><Link to='/fixtures' activeClassName='is-active'>Fixtures</Link></li>
                    <li class='nav-item premium'><Link to='/modify' activeClassName='is-active'>Modify</Link></li>
                    <li class='nav-item second-nav-item nav-header-two'><Link to='/transfers' activeClassName='is-active'>Transfers</Link></li>
                    <li class='nav-item second-nav-item nav-header-two'><Link to='/office' activeClassName='is-active'>Office</Link></li>
                    <li class='nav-item second-nav-item nav-header-two'><Link to='/settings' activeClassName='is-active'>Settings</Link></li>
                  </ul>
                </nav>
              </Col>
            </Row>
        </Container>
      </div>
            <Container>
                <Row>
                <Col md={12}>
                <hr></hr>
                </Col>
                  <Col md={6}>
                  <Tile><Link to='/team' activeClassName='is-active'><p><b>Submit Team Sheet</b></p></Link></Tile>
                  </Col>
                  <Col md={6}>
                  <Tile><Link to='/team' activeClassName='is-active'><p><b>Submit Stats</b></p></Link></Tile>
                  </Col>
                  <Col md={6}>
                  <p><b>Club Squad + Squad stats with average ratings</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Contracts</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Training</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Dreesing Room Speech</b></p>
                  </Col>
                </Row>
            </Container>
        </Layout>
    )
}
