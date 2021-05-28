import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <>
            <StyledNav>
                Navbar
            </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 100;
`




export default Navbar
