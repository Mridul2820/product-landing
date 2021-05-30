import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }
`

export const StyledContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 992px) {
        padding: 0 30px;
    }
`

export const StyledButton = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`


export default GlobalStyle