import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
const Wrapper = styled.div`
  width: 740px;
  height: 700px;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  background-image: url("/football-pitch.png");
  background-size: 100% 100%;
`;

const PlayerIcon = styled.div`
  position: absolute;
  height: 35px;
  width: 35px;
  padding-top: 5px;
  border-radius: 100%;
  text-align: center;
  vertical-align: bottom;
  font-weight: bold;
`;

const PlayerCard = styled.div`
  position: absolute;
  margin-left: -25px!important;
  margin-bottom: 35px!important;
  height: 120px;
  width: 90px;
  background-image: url("/card_bg2.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const PlayerPic = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  left: 14%;
  top: 8%;
  border-radius: 100%;
  border 3px solid #fff;
  background-image: url("/profile-pic.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const PlayerName = styled.div`
  color: #fff;
  font-size: 0.8rem;
  position: absolute;
  top: 60%;
  text-align: center;
  width: 80px;
`;

const Formation = ({ formation }) => {
  const [goalKeeper, defenders, midfielders, forwards] = formation;


  const renderGoalKeeper = () => {
    const components = [];
    for (let c = 0; c < goalKeeper.players.length; c++) {
      components.push(
        <PlayerIcon
          key={c}
          style={{
            backgroundColor: "yellow",
            left: goalKeeper.locations[c].left,
            bottom: goalKeeper.locations[c].bottom,
          }}
        >{goalKeeper.locations[c].position}</PlayerIcon>
      );
      components.push(
        <PlayerCard
          key={c}
          style={{
            left: goalKeeper.locations[c].left,
            bottom: goalKeeper.locations[c].bottom,
          }}
        ><PlayerPic></PlayerPic><PlayerName>{goalKeeper.players[c].name}</PlayerName></PlayerCard>
      );
    }
    return components;
  };

  const renderDefenders = () => {
      const components = []
      for(let c = 0; c < defenders.players.length; c++){
          components.push(
              <PlayerIcon
                key={c}
                style={{
                    background: 'lightblue',
                    left: defenders.locations[c].left,
                    bottom: defenders.locations[c].bottom,
                }}
              >{defenders.locations[c].position}</PlayerIcon>
          )
          components.push(
            <PlayerCard
              key={c}
              style={{
                left: defenders.locations[c].left,
                bottom: defenders.locations[c].bottom,
              }}
            ><PlayerPic></PlayerPic><PlayerName>{defenders.players[c].name}</PlayerName></PlayerCard>
          )
      }
      return components
  }

  const renderMidfielders = () => {
    const components = []
    for(let c = 0; c < midfielders.players.length; c++){
        components.push(
            <PlayerIcon
              key={c}
              style={{
                  background: 'lightgreen',
                  left: midfielders.locations[c].left,
                  bottom: midfielders.locations[c].bottom,
              }}
              >{midfielders.locations[c].position}</PlayerIcon>
        )
        components.push(
          <PlayerCard
            key={c}
            style={{
              left: midfielders.locations[c].left,
              bottom: midfielders.locations[c].bottom,
            }}
          ><PlayerPic></PlayerPic><PlayerName>{midfielders.players[c].name}</PlayerName></PlayerCard>
        )
    }
    return components
}

const renderForwards = () => {
    const components = []
    for(let c = 0; c < forwards.players.length; c++){
        components.push(
            <PlayerIcon
              key={c}
              style={{
                  background: 'red',
                  left: forwards.locations[c].left,
                  bottom: forwards.locations[c].bottom,
              }}
              >{forwards.locations[c].position}</PlayerIcon>
        )
        components.push(
          <PlayerCard
            key={c}
            style={{
              left: forwards.locations[c].left,
              bottom: forwards.locations[c].bottom,
            }}
          ><PlayerPic></PlayerPic><PlayerName>{forwards.players[c].name}</PlayerName></PlayerCard>
        )
    }
    return components
}
  return (
    <Wrapper>
        {
            renderGoalKeeper()
        }
        {
            renderDefenders()
        }
        {
            renderMidfielders()
        }
        {
            renderForwards()
        }
      </Wrapper>
  )
};

const mapStateToProps = (state) => {
  return {
    formation: state.formations[state.selectedFormation],
  };
};

export default connect(mapStateToProps)(Formation);
