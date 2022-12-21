import styled from "styled-components";

const SearchHeader = styled.section`
display: flex; 
flex-direction: column;
padding: 2rem;
align-items: center; 

`;

const SearchForm = styled.form`
position: relative;
width: max-content;
`;


const SearchInput = styled.input`
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border: 1px solid ${({ theme }) => theme.colors.color};
    padding: 10px;
    width: 3rem;
    height: 50px;
    background: none;
    border-radius: 50px;
    font-size: 0;
    outline: none;
    transition: 0.5s;
    ${SearchForm}:hover & {
    min-width: 14rem;
    max-width: 20rem;
    border-radius: 10px;
    font-size: 26px;
    position: relative;
    transition: 0.5s;
};

`;

const SearchButton = styled.button`
 border: none;
    background-color: transparent;
    width: max-content;
`;



const SearchIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: 0.5s;;
    max-width: 1.5rem;
    opacity: 0.7;
    ${SearchForm}:hover &{
        left: 82%;
        transition: 0.5s;
};
`;

export { SearchHeader, SearchForm, SearchInput, SearchIcon, SearchButton };