import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterLinks = () => {
    return (
        <FooterLinkWrap>
            <FooterLinkd>
                <h2>About Us</h2>
                <FooterLink to='/sign-up'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkd>

            <FooterLinkd>
                <h2>Contact Us</h2>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkd>

            <FooterLinkd>
                <h2>Videos</h2>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkd>

            <FooterLinkd>
                <h2>Social Media</h2>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkd>
        </FooterLinkWrap>
    )
}

const FooterLinkWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const FooterLinkd = styled.div`
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

export default FooterLinks
