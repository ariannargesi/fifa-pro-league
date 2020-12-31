import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #eee;
`

export default () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-30`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div style={{textAlign: 'center', border: '1px solid #eee', width: '100%'}} >
          <p>{timeLeft[interval]}</p>
          <p>{interval}{" "}</p>
      </div>
    );
  });
  return (
    <Wrapper style={{display: 'flex', justifyContent: 'space-between', fontSize: '20px', lineHeight: '20px', padding: '0'}}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Wrapper>
  );
}
