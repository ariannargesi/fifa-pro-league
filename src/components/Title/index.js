import React from 'react'
import styled, { css } from 'styled-components'

/*const Title = styled.h2``
Title.Medium = styled.h3``
Title.Small = styled.h5``*/

const Title = styled.div`
font-size: 2.4rem;
font-style: italic;
font-weight: bold;
background: rgb(0,0,0);
background: linear-gradient(97deg, rgba(0,0,0,1) 0%, rgba(152,152,152,1) 90%);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
padding: 10px 0 0 20px;

${(props) =>
  props.blur &&
  css`
  filter: blur(3px);
`}

${(props) =>
  props.titleBoxBlack &&
  css`
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,6d6d6d+100 */
    background: #000000; /* Old browsers */
    background: -moz-linear-gradient(-45deg,  #000000 0%, #6d6d6d 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg,  #000000 0%,#6d6d6d 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg,  #000000 0%,#6d6d6d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#6d6d6d',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    text-transform: uppercase;
  `}

${(props) =>
  props.titleBoxWhite &&
  css`
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f5f5f5+0,ffffff+100 */
background: #f5f5f5; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #f5f5f5 0%, #ffffff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #f5f5f5 0%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #f5f5f5 0%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  `}
`

export default Title
