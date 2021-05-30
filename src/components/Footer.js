import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './GlobalStyles'
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

const Footer = () => {
    return (
        <StyledFooter>
            <section>
                <h3>Join our exclusive membership to receive the latest news and trends</h3>
                <p>You can unsubscribe at any time.</p>
                <FooterForm>
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='Your Email' 
                    />
                    <StyledButton fontBig>Subscribe</StyledButton>
                </FooterForm>
            </section>
        
            <FooterLinks />

            <FooterSocial />
        </StyledFooter>
    )
}

export const StyledFooter = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        padding-top: 2.5rem;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 24px;
        padding: 24px;
        color: #fff;

        @media screen and (max-width: 820px) {
            padding: 15px;
        }

        h3 {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            margin-bottom: 24px;
            font-size: 24px;
        }

        p {
            margin-bottom: 24px;
            font-size: 20px;
        }
    }
`

const FooterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        padding: 10px 20px;
        border-radius: 2px;
        margin-right: 10px;
        outline: none;
        border: none;
        font-size: 16px;
        border: 1px solid #fff;

        &::placeholder {
            color: #242424;
        }

        @media screen and (max-width: 425px) {
            width: 100%;
            margin-right: 5px;
        }
    }

    ${StyledButton} {
        width: unset;

        @media screen and (max-width: 425px) {
            padding: 10px;
            font-size: 17px;
        }
    }
`

export default Footer
