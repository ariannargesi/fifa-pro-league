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
                    <Col lg={4}>
                        <Sidebar/>
                    </Col>
                    <Col lg={8}>
                        <Formation />
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}
