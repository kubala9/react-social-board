import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
background: ${props => props.background};
color: ${props => props.textColor};
text-align: ${props => props.textAlign};
padding: 2rem;
text-transform: uppercase;
font-weight: 700
`
export const Title = (props) => {
  return <StyledTitle {...props}>{props.text}</StyledTitle>;
};
