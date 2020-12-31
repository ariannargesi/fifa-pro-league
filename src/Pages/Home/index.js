import React from 'react'
import styled from 'styled-components'
import Layout from '../../layouts/Layout'
import Slider from '../../layouts/Slider'
import { Container, Row, Col } from 'react-bootstrap'

const Facebook = styled.div`
    padding-top: 20px;
`

const Home = (props) => {
   return (
      <Layout className='layouttttt'>
         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden', height: '470px', color: 'white', backgroundImage: 'url("/slide.jpg")', backgroundSize: '100% 500px'}}>
            <Slider/>
         </div>
         <Container>
         <Row>
         <Col md={8}>
         <h1>What is FIFA Pro Clubs League (FPC League)?</h1>
         </Col>
         <Col md={4}>
         <Facebook>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFPC.League.1&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="100%" height="600" border="none" overflow="hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </Facebook>
         </Col>
         <p>We are a new competitive pro clubs league. We want to approach things differently then other ordinary leagues. We define ourselfs as a community for FIFA players & want to get you involved as much as possible. We're under construction, exciting things to come!</p>

         <h1>Which platforms are supported?</h1>
         <p>PlayStation and Xbox</p>

         <h1>What's the league structure?</h1>
         <p>For now, the league is a Super League with up to 20 clubs. For the future we plan to introduce different formats e.g. a World Cup tournament, Champions League, Domestic Cups and perhaps split the teams up to their national league. All that will be decided with the consideration of you, the community.</p>
         </Row>
         </Container>
      </Layout>
   )
}

export default Home
