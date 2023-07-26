import styled from "styled-components";

const FooterBlock = styled.section`
display: flex;
flex-direction: row;
padding: 2rem;
gap: 4rem;
bottom: 0;
width: max-content;
margin: 0 auto;
align-items: center;
justify-content: center;
text-align: center;
position: relative;
color: ${({ theme }) => theme.colors.fontColor};
@media (max-width: 470px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const DataSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

const Image = styled.img`
width: 4rem;
height: 4rem;
background-color:${({ theme }) => theme.colors.iconBg};
backdrop-filter: blur(5px);
border-radius: 50%;
padding: 1rem;
opacity: 0.6;
`;


export { FooterBlock, DataSection, Image };