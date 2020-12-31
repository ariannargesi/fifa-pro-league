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
                  <Link to="/" activeClassName='is-active'><Tile background2 half navheight><Title titleBoxWhite>Other Settings</Title></Tile></Link>
                  <Link to="/" activeClassName='is-active'><Tile background half navheight><Title titleBoxBlack>Delete Club</Title></Tile></Link>
                </Col>
              </Row>
            </Container>
        </Layout>
    )
}
