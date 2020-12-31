import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../../layouts/Layout'
import Title from "../../components/Title";
import Tile from "../../components/Tile";
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <Layout>
            <Container>
                <Row>
                  <Col>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Club worth</Title>
                        <p>15.000.000 Coins</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Transfer Budget</Title>
                        <p>3.000.000 Coins</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Overview</Title>
                        <p>Country, Club Name, League, Est.</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Club Bio</Title>
                        <p>Write something about your club.</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Manage Staff</Title>
                        <p>Assin co-managers, coaches</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Objectives</Title>
                        <p>Domestic Success - High - 500 Coins</p>
                        <p>Continental Sucess - High - 800 Coins</p>
                        <p>Financial - Very low - 50 Coins</p>
                        <p>Brand Exposure - Middle - 100 Coins</p>
                        <p><i>Win Coins for each reached objective</i></p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Trophy Room</Title>
                        <p></p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Manager Rules</Title>
                        <p></p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Manager Guidance</Title>
                        <p></p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Club Crest</Title>
                        <p></p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Your Kit</Title>
                        <p>Home - Away</p>
                      </Tile>
                    </Link>
                    <Link to="/" activeClassName='is-active'>
                      <Tile background half navheight>
                        <Title titleBoxBlack>Ground</Title>
                        <p>Old Trafford</p>
                      </Tile>
                    </Link>
                  </Col>
                </Row>
            </Container>
        </Layout>
    )
}
