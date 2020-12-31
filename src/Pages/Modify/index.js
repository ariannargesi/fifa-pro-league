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
                  <p><b>Premium club functions and modifications</b></p>
                  </Col>
                </Row>
            </Container>
        </Layout>
    )
}
