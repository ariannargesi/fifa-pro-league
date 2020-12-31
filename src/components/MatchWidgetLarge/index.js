import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Countdown from '../Countdown'
const TeamInfo = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  font-size: 24px;
  color: #222222;
`;

const Badge = styled.span`
    height: 30px;
    background: #f0f0f0;
    border: 1px solid #e1e1e1;
    display: inline-block;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 15px;
    color: #e81f3e;
    margin-bottom: 45px;
`
const MatchDetails = styled.div`
    display: flex;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    padding-top: 1.5rem;
    flex-direction: column;
`

const MatchWidgetLarge = (props) => {
  return (
    <Card style={{padding: '0'}} className='match-widget-large'>
      <Card.Header
        style={{
          background: "#e81f3e",
          color: "white",
          textAlign: "center",
          borderRadius: "3px 3px 0 0",
          fontSize: "20px",
        }}
      >
        Next Match
      </Card.Header>
      <Card.Body>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem'}}>
          <TeamInfo>
            <img src="/teamLogo.png" width={80} style={{ margin: "0 auto" }} />
            <span>FC Barcelona</span>
          </TeamInfo>
          <Badge>
              <strong>VS</strong>
          </Badge>
          <TeamInfo>
            <img src="/teamLogo.png" width={80} style={{ margin: "0 auto" }} />
            <span>FC Barcelona</span>
          </TeamInfo>
        </div>
        <MatchDetails>
            <strong style={{color: '#e81f3e'}} >SUPER EURO LEAGUE</strong>
            <span style={{fontWeight: '300'}}>20 December, 2020</span>
            <span style={{fontWeight: '300'}}>04:00 PM GMT+</span>
            <span style={{color: '#e81f3e'}}>New Expo Stadium, NYK</span>
        </MatchDetails>
        <Countdown/>
      </Card.Body>
    </Card>
  );
};

export default MatchWidgetLarge;
