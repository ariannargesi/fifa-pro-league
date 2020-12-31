import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../../layouts/Layout'
import Sidebar from '../../components/FormationSidebar'
import Formation from '../../components/Formation'
import Title from "../../components/Title";

export default (props) => {
    return (
        <Layout>
            <Container>
                <Row>
                  <Col md={6}>
                  <p><b>Fixtures + Submit stats here</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Standings</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Calendar</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Other leagues</b></p>
                  <p>Look at how other teams in other leagues doing or</p>
                  <p>watch your next champions league oponent</p>
                  </Col>
                </Row>
            </Container>
        </Layout>
    )
}
