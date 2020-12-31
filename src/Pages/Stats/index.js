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
                  <p><b>Put match stats here</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Squad stats with average ratings</b></p>
                  </Col>
                  <Col md={6}>
                  <p><b>Premium stats</b></p>
                  </Col>
                </Row>
            </Container>
        </Layout>
    )
}
