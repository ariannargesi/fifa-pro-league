import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from '../../components/NavBar'
import { useTable } from "react-table";
import Layout from "../../layouts/Layout";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Tile from "../../components/Tile";
import { Link } from 'react-router-dom'

const ClubHub = (props) => {
  return (
    <Layout>
        <div className="logo-navbar category-navbar">
        <Container>
        <Title>FPC Man United</Title>
          <Row>
            <Col md={12} sm={7}>
            <nav className="main-nav" style={{ height: "60px" }}>
              <ul>
                <li class="nav-item second-nav-item active"> <Link to="/clubhub" activeClassName='is-active'>Central</Link></li>
                <li class='nav-item second-nav-item nav-header-two'><Link to='/inbox' activeClassName='is-active'>Inbox</Link></li>
                <li class='nav-item second-nav-item nav-header-two'><Link to='/squad' activeClassName='is-active'>Squad</Link></li>
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
        <Col>
        <hr></hr>
        <Link to="/squad" activeClassName='is-active'><Tile background2 twothirds><Title titleBoxWhite>Manage</Title></Tile></Link>
        <Tile background={'#ee4'} third><Title titleBoxBlack>To do list</Title></Tile>
        <Link to="/inbox" activeClassName='is-active'><Tile background2 third><Title titleBoxWhite>Inbox</Title></Tile></Link>
        <Link to="/fixtures" activeClassName='is-active'><Tile background2 third><Title titleBoxWhite>Fixtures</Title></Tile></Link>
        <Link to="/" activeClassName='is-active'><Tile background2 third><Title titleBoxWhite>Table</Title></Tile></Link>
        <Link to="/" activeClassName='is-active'><Tile background2 third><Title titleBoxWhite>Transfers</Title></Tile></Link>
        <Link to="/office" activeClassName='is-active'><Tile background2 twothirds><Title titleBoxWhite>Office</Title></Tile></Link>
        </Col>
        </Row>
      </Container>
    </Layout>
  );

};

export default ClubHub;
