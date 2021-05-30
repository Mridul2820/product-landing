import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaMagento } from 'react-icons/fa';

const FooterSocial = () => {
    const year = new Date().getFullYear()

    return (
        <SocialMedia>
            <SocialWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    ULTRA
                </SocialLogo>
                <WebsiteRights>
                    ULTRA &copy; {year} by 
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/Mridul2820">
                        Mridul
                    </a> 
                </WebsiteRights>
                <SocialIcons>
                    <a href='https://github.com/Mridul2820' rel="noreferrer" target='_blank' aria-label='Github'>
                        <FaGithub />
                    </a>

                    <a href='https://www.instagram.com/i_mridul/' target='_blank' rel="noreferrer" aria-label='Instagram'>
                        <FaInstagram />
                    </a>

                    <a href='https://twitter.com/i_mridul' rel="noreferrer" target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </a>
                </SocialIcons>
            </SocialWrap>
        </SocialMedia>
    )
}

const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`
const SocialWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const SocialIcon = styled(FaMagento)`
    margin-right: 10px;
`

const WebsiteRights = styled.p`
    color: #fff;
    margin-bottom: 16px;

    a {
        color: #fff;
        margin-left: 5px;
    }
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;

    a {
        color: #fff;
        font-size: 24px;
    }
`


export default FooterSocial
