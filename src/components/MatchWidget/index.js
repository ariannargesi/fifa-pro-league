import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(53,61,84,1) 0%, rgba(23,30,54,1) 100%);
    border-radius: 5px;
`

const Body = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
`
const TeamInfo = styled.div`
   display: flex;
   flex-direction: column;
   font-size: 18px;
   color: #ffff;
   font-weight: 700;
   margin: 5px 0 0;
   justify-content: center;
   text-align: center;
`
const MatchDetails = styled.div`
    color: #fff;
    display: flex;
    font-size: 14px;
    text-align: center;
    padding-top: 1.5rem;
    flex-direction: column;
`
const Badge = styled.strong`
    width: 50px;
    text-align: center;
    background: #7c859a;
    border: 0;
    display: inline-block;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 15px;
    color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 14px;
`
const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size:14px;
    color: #9c9c9c;
    border-top: 1px solid #616161;
    * {
        transition: 200ms;
        width: 100%;
        text-align: center;
        cursor: poiner;
        padding: 0.8rem;
        cursor: pointer;
        &:hover{
            background: #e81f3e;
            color: white;
        }
    }

`
const MatchWidget = (props) => {

    return (
        <Wrapper>
        <Body>
            <TeamInfo>
                <img src={'/teamLogo.png'} width={48} style={{margin: '0 auto'}}/>
                <span>FC Barcelona</span>
            </TeamInfo>
            <MatchDetails>
                <span>SUPER ASIA CUP</span>
                <span>20 December, 2020</span>
                <span>04:00 PM GMT+</span>
                <Badge>VS</Badge>
            </MatchDetails>
            <TeamInfo>
                <img src={'/teamLogo.png'} width={48} style={{margin: '0 auto'}}/>
                <span>FC Barcelona</span>
            </TeamInfo>
        </Body>
        <Footer>
            <span>King Power Stadium</span>
            <span>BOOK TICKETS</span>
        </Footer>
        </Wrapper>
    )
}

export default MatchWidget
