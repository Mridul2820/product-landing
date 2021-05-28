import React from 'react'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledContainer } from "../components/GlobalStyles";

const Navbar = () => {
    return (
        <>
            <StyledNav>
                <StyledNavBar>
                    <StyledLogo to='/'>
                        <StyledIcon>
                            ULTRA
                        </StyledIcon>
                    </StyledLogo>
                </StyledNavBar>
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

const StyledNavBar = styled(StyledContainer)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${StyledContainer}
`

const StyledLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

const StyledIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`

export default Navbar
