import React from 'react'
import Layout from '../../layouts/Layout'
import Slider from '../../layouts/Slider'
import { Container, Row, Col } from 'react-bootstrap'

const Discord = (props) => {
   return (
      <Layout className='layouttttt'>

      <Container>
         <Row>
         <Col md={8}>
            <div class="discord-chat">
               <iframe src="https://titanembeds.com/embed/787009395099041833?defaultchannel=789555392493518858&theme=DiscordDark&scrollbartheme=minimal-dark" height="800" width="750" frameborder="0"></iframe>
            </div>
         </Col>
         <Col md={4}>
         <div class="discord-chat">
            <iframe src="https://discord.com/widget?id=787009395099041833&theme=dark" width="300" height="800" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
         </Col>
         </Row>
      </Container>

      </Layout>
   )
}

export default Discord
