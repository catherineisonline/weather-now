import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% {
  
    background-position: center;
    -webkit-background-position:  center;
  }
  30% {
    background-position: center top;
    -webkit-background-position:  center top;
  }
  40% {
    background-position: top center;
    -webkit-background-position:  top center;
  }
  100% {
    background-position: center;
    -webkit-background-position:  center;
  }
`;

const StyledWeatherContainer = styled.main`
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");

display: flex;
flex-direction: column;
justify-content: space-between;
font-family: "Ubuntu", sans-serif;
height: inherit;
background-image: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.color};
    background-size:cover;
     -webkit-background-size: cover;
    background-repeat: no-repeat;
animation: ${breatheAnimation} 8s infinite ;
 -webkit-animation:  ${breatheAnimation} 8s infinite ;
  -moz-animation:  ${breatheAnimation} 8s infinite ;
  -ms-animation:  ${breatheAnimation} 8s infinite ;
  -o-animation:  ${breatheAnimation} 8s infinite ;
  @media (max-width: 470px) {
    height: initial;
gap: 10rem;
  }

`;

export default StyledWeatherContainer;