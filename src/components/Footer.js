import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from './GlobalStyles'

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
            <FooterLinkWrap>
                <FooterLinks>
                    <h2>About Us</h2>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinks>

                <FooterLinks>
                    <h2>Contact Us</h2>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinks>

                <FooterLinks>
                    <h2>Videos</h2>
                    <FooterLink to='/'>Submit Video</FooterLink>
                    <FooterLink to='/'>Ambassadors</FooterLink>
                    <FooterLink to='/'>Agency</FooterLink>
                    <FooterLink to='/'>Influencer</FooterLink>
                </FooterLinks>

                <FooterLinks>
                    <h2>Social Media</h2>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Youtube</FooterLink>
                    <FooterLink to='/'>Twitter</FooterLink>
                </FooterLinks>
            </FooterLinkWrap>
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

const FooterLinkWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 160px;
    color: #fff;

    @media screen and (max-width: 425px) {
        width: 120px;
    }

    h2 {
        margin-bottom: 16px;

        @media screen and (max-width: 425px) {
            font-size: 18px;
        }
    }
`

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 425px) {
        font-size: 14px;
    }

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`

export default Footer
