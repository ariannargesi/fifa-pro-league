import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { changeFormation } from "../../redux/actions";

const Wrapper = styled.div`
  font-size: 18px;
`;

const Submit = styled.div`
  font-size: 18px;
  background: #000;
  padding: 20px;
  background: #3adc55;
  background: -moz-linear-gradient(-45deg,  #3adc55 0%, #00af66 100%);
  background: -webkit-linear-gradient(-45deg,  #3adc55 0%,#00af66 100%);
  background: linear-gradient(135deg,  #3adc55 0%,#00af66 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3adc55', endColorstr='#00af66',GradientType=1 );
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
  font-size: 1.2rem;
`;

const formationsTitle = [ "3-5-2", "4-3-3", "4-4-2", "4-4-2 Diamond", "5-4-1" ];

const FormationSidebar = (props) => {
  const { players } = props
  const playersList = players.defenders.concat(players.midfielders, players.forwards, players.others)

  console.log(playersList)


  const updateFormation = (newFormationIndex) => {
    props.changeFormation(newFormationIndex);
  };

  const renderUpdateFormationButtons = () => {
    const buttons = [];
    for (let c = 0; c <= props.formationsCount - 1; c++) {
      // seting formation titles in this way it's not a good practice. I need to update this later on
      buttons.push(
        <div style={{padding: '0.5rem'}}>
          <Button variant="success" key={c} onClick={() => updateFormation(c)}>
            {formationsTitle[c]}
          </Button>
        </div>
      );
    }
    return buttons;
  };

  return (
    <Wrapper {...props}>
      <ul>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Select match
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>{renderUpdateFormationButtons()}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Select formation
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>{renderUpdateFormationButtons()}</ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Select players
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                  {
                    playersList.map(({name}, key) => {
                      return <div style={{padding: '0.5rem'}}> <Button variant='success' key={key}>
                        {name}
                      </Button></div>
                    })
                  }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Link to='/play'><Submit>Submit</Submit></Link>
        </Accordion>
      </ul>
    </Wrapper>
  );
};

const mapStateToProps = ({ formations, players }) => {
  return {
    formationsCount: formations.length,
    players

  };
};

export default connect(mapStateToProps, { changeFormation })(FormationSidebar);
