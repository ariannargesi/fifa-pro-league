import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from '../../components/NavBar'
import { useTable } from "react-table";
import Layout from "../../layouts/Layout";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Tile from "../../components/Tile";
import { Link } from 'react-router-dom'

import gql from "graphql-tag";

import { useQuery } from "@apollo/react-hooks";

const GET_ME = gql`
  {
    me {
      id
      name
    }
  }
`;

const PlayerHub = (props) => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <div className="logo-navbar category-navbar">
      <Container>
        <Row>
          <Col md={2}>
            <Title>{data.me.name}</Title>
          </Col>
          <Col md={10} sm={7}>
          <nav className="main-nav" style={{ height: "60px" }}>
            <ul>
              <li class="nav-item second-nav-item nav-header-two active"><Link to="/">Central</Link></li>
              <li class='nav-item second-nav-item nav-header-two'><Link to='/'>Inbox</Link></li>
              <li class='nav-item second-nav-item nav-header-two'><Link to='/'>Schedule</Link></li>
              <li class='nav-item premium'><Link to='/playerhub'>Modify</Link></li>
              <li class='nav-item second-nav-item nav-header-two'><Link to='/'>Stats</Link></li>
              <li class='nav-item second-nav-item nav-header-two'><Link to='/'>Settings</Link></li>
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
      <Link to="/squad" activeClassName='is-active'><Tile backgroundclubheader twothirds spacer><Title titleBoxWhite>Play</Title></Tile></Link>
      <Tile background2 third><Title titleBoxWhite>Next</Title></Tile>
      <Link to="/inbox" activeClassName='is-active'><Tile backgroundseason third><Title titleBoxWhite>Season</Title></Tile></Link>
      <Link to="/fixtures" activeClassName='is-active'><Tile background twothirds><Title titleBoxBlack>Stats</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile background2 third><Title titleBoxWhite>TOTW</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile backgroundpremium third><Title titleBoxBlack>Get Coins</Title></Tile></Link>
      <Link to="/office" activeClassName='is-active'><Tile backgroundeditprofile third><Title titleBoxWhite>Edit Profile</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile backgroundclub1 third><Title titleBoxWhite>Your Team</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile backgroundclub2 third><Title titleBoxWhite>Your Position</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile backgroundclub3 third><Title titleBoxWhite>Table</Title></Tile></Link>
      <Link to="/office" activeClassName='is-active'><Tile backgroundclub2 third><Title titleBoxWhite>Team Speech</Title></Tile></Link>
      <Link to="/" activeClassName='is-active'><Tile backgroundpremium third><Title titleBoxBlack>Get Premium</Title>
      <li>Monthly 500 Coins free</li>
      <li>25% Off Coin Purchases</li>
      <li>Release yourself from any contract</li>
      <li>Change FPC username</li>
      <li>Entry into premium tournaments</li>

      </Tile></Link>
      <Link to="/office" activeClassName='is-active'><Tile backgroundclub1 third><Title titleBoxWhite>Fixtures</Title></Tile></Link>
      </Col>
      </Row>
    </Container>

    </Layout>
  );

};

export default PlayerHub;
