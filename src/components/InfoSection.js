import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledContainer, StyledButton } from "../components/GlobalStyles";

const InfoSection = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    topLine, 
    lightText,
    headline,
    lightTextDesc,
    description,
    buttonLabel
}) => {
    return (
        <StyledInfoSec lightBg={lightBg}>
            <StyledContainer>
                <StyledInfoRow imgStart={imgStart}>
                    <StyledInfoCol>
                        <StyledTextWrap>
                            <StyledTopLine lightTopLine={lightTopLine}>
                                {topLine}
                            </StyledTopLine>
                            <StyledHeading lightText={lightText}>
                                {headline}
                            </StyledHeading>
                            <StyledSubTitle lightTextDesc={lightTextDesc}>
                                {description}
                            </StyledSubTitle>
                            <Link to="/signup">
                                <StyledButton big fontBig primary>
                                    {buttonLabel}
                                </StyledButton>
                            </Link>
                        </StyledTextWrap>
                    </StyledInfoCol>
                </StyledInfoRow>
            </StyledContainer>
        </StyledInfoSec>
    )
}

const StyledInfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

const StyledInfoRow = styled.div`
    display: flex;
    flex-direction: ${({ imgStart }) => imgStart ? 'column' : 'row' };
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -15px -15px -15px;
`

const StyledInfoCol = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    flex-basis: 50%;
    max-width: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

const StyledTextWrap = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`

const StyledTopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59f7' )};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`
const StyledHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237' )};
`
const StyledSubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237' )};
`

export default InfoSection
