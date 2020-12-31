import React from 'react'
import styled, { css } from 'styled-components'

const Tile = styled.div`
  width: 100%;
  height: 300px;
  display: inline-block;
  border-radius: 12px;
  border: 3px solid #fff;
  text-decoration: none;
  position: relative;
  float: left;

// Tile Sizes
  ${(props) =>
    props.threequarters &&
    css`
      width: 75%;
      display: inline-block;
    `}

    ${(props) =>
      props.twothirds &&
      css`
        width: 66.66%;
        display: inline-block;
      `}

	${(props) =>
    props.half &&
    css`
      width: 50%;
      display: inline-block;
    `}

  ${(props) =>
    props.third &&
    css`
      width: 33.33%;
      display: inline-block;
    `}

${(props) =>
    props.quarter &&
    css`
      width: 25%;
      display: inline-block;
    `}

//Tile Heights
${(props) =>
    props.navheight &&
    css`
      height: 180px;
    `}

//Tile Colors
    ${(props) =>
        props.background &&
        css`
          background: ${props.background}
        `}

    ${(props) =>
        props.background2 &&
        css`
          background: #001bb3; /* Old browsers */
          background: -moz-linear-gradient(-45deg,  #001bb3 30%, #4466ff 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(-45deg,  #001bb3 30%,#4466ff 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(135deg,  #001bb3 30%,#4466ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001bb3', endColorstr='#4466ff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    `}

//PlayerHub Backgrounds
    ${(props) =>
        props.backgroundclubheader &&
        css`
          background-image: url('/playerhub-header.png');
          background-size: cover;
      `}


    ${(props) =>
        props.backgroundclub1 &&
        css`
          background: #8D0017;
          background-image: url('/clublayer1.png');
      `}

      ${(props) =>
    props.backgroundclub2 &&
    css`
      background: #8D0017;
      background-image: url('/clublayer2.png');
  `}

  ${(props) =>
    props.backgroundclub3 &&
    css`
      background: #8D0017;
      background-image: url('/clublayer3.png');
  `}

      ${(props) =>
          props.backgroundpremium &&
          css`
            /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#c09746+0,fbf6bd+25,b17b1f+100 */
            background: #c09746; /* Old browsers */
            background: -moz-linear-gradient(-45deg, #c09746 0%, #fbf6bd 25%, #b17b1f 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(-45deg, #c09746 0%,#fbf6bd 25%,#b17b1f 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(135deg, #c09746 0%,#fbf6bd 25%,#b17b1f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c09746', endColorstr='#b17b1f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      `}

      ${(props) =>
          props.backgroundseason &&
          css`
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#420099+0,5200be+40,5200be+40,934bff+100 */
          background: #420099; /* Old browsers */
          background: -moz-linear-gradient(-45deg,  #420099 0%, #5200be 40%, #5200be 40%, #934bff 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(-45deg,  #420099 0%,#5200be 40%,#5200be 40%,#934bff 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(135deg,  #420099 0%,#5200be 40%,#5200be 40%,#934bff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#420099', endColorstr='#934bff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`}

${(props) =>
    props.backgroundeditprofile &&
    css`
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#642bff+0,6f2bff+50,9c4aff+100 */
      background: #642bff; /* Old browsers */

      background-image: url('/editprofile.png');
`}

    ${(props) =>
      props.color &&
      css`
        color: ${props.color}
      `}
`;

export default (props) => (
    <Tile {...props} >
        {props.children}
    </Tile>
)
