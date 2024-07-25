import styled from "styled-components";

const CenterContainerBlock = styled.section`
letter-spacing: 50%;
display: flex;
flex-direction: column;
gap: 1.5rem;
text-align: center;
align-items: center;
margin: 0 auto;
padding: 2rem;
max-width: 37.5rem;
min-width: 25rem;
width: 100%;
font-size: 2.5rem;
position: relative;
color: ${({ theme }) => theme.colors.fontColor};
`;

const HighLow = styled.section`
display: flex;
flex-direction:row;
gap: 1rem;
font-size: 1.4rem;
`;

const WeatherDesc = styled.p`
font-size: 1.4rem;
`;

const Temperature = styled.p`
font-size: 3.5rem;
`;

export { CenterContainerBlock, HighLow, WeatherDesc, Temperature };