import React from "react";
import MatchWidget from "../../components/MatchWidget";
import MatchWidgetLarge from '../../components/MatchWidgetLarge'
import { Container, Col, Row } from "react-bootstrap";
const Temp = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <MatchWidgetLarge/>
        </Col>
        <Col lg={4}>
          <MatchWidgetLarge/>
        </Col>
        <Col lg={4}>
          <MatchWidgetLarge/>
        </Col>
        <br/>
        <br/>
        <br/>
        <br/>
        <Col lg={4}>
          <MatchWidget/>
        </Col>
        <Col lg={4}>
          <MatchWidget/>
        </Col>
        <Col lg={4}>
          <MatchWidget/>
        </Col>
      </Row>
    </Container>
  );
};

export default Temp;
