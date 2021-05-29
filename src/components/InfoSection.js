import React from 'react'
import styled from 'styled-components';
import { StyledContainer } from "../components/GlobalStyles";

const InfoSection = () => {
    return (
        <StyledInfoSec >
            
        </StyledInfoSec>
    )
}

const StyledInfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}
`

export default InfoSection
