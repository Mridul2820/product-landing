import React, { useState } from 'react'
import styled from 'styled-components';
import { StyledButton } from '../components/GlobalStyles';

import { AiFillLinkedin, AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'

const SignUp = () => {
    const [leftActive, setLeftActive] = useState(true)

    return (
        <SignContainer>
            <SignUpContainer leftActive={leftActive}>
                <StyledFrom>
                    <h1>Create Account</h1>

                    <SocialContainer>
                        <AiFillGoogleCircle />
                        <AiFillFacebook />
                        <AiFillLinkedin />
                    </SocialContainer>
                    <span>or use your email for registration</span>

                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <StyledButton className="sign-up-button">Sign Up</StyledButton>
                </StyledFrom>
            </SignUpContainer>
            <SignInContainer leftActive={leftActive}>
                <StyledFrom>
                    <h1>Sign In</h1>

                    <SocialContainer>
                        <AiFillGoogleCircle />
                        <AiFillFacebook />
                        <AiFillLinkedin />
                    </SocialContainer>
                    <span>or use your account</span>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"  />
                    <a href="/">Forgot your password?</a>
                    <StyledButton>Sign In</StyledButton>
                </StyledFrom>
            </SignInContainer>

            <OverlayWrap leftActive={leftActive}>
                <Overlay leftActive={leftActive}>
                    <OverlayLeft leftActive={leftActive}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <StyledButton onClick={() => setLeftActive(true)}>
                            Sign Up
                        </StyledButton>
                    </OverlayLeft>
                    <OverlayRight leftActive={leftActive}>
                        <h1>Already have an account?</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <StyledButton onClick={() => setLeftActive(false)}>
                            Sign In
                        </StyledButton>
                    </OverlayRight>
                </Overlay>
            </OverlayWrap>
        </SignContainer>
    )
}

const SignContainer = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    margin: 70px auto;

    @media screen and (max-width: 820px) {
        width: 95%;
        min-height: 400px;
    }

    @media screen and (max-width: 425px) {
        height: 100%;
        min-height: 750px;
        margin: 30px auto;
    }

    ${StyledButton} {
        margin-top: 20px;
        width: unset;
    }
`

const SignUpContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    z-index: 2;
    transition: all .6s ease-in-out;
    transform: ${({leftActive}) => leftActive ? '' : 'translateX(100%)'} ;

    @media screen and (max-width: 425px) {
        width: 100%;
        height: 50%;
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? '' : 'translateY(100%)'} ;
    }
`
const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    transition: all .6s ease-in-out;

    transform: ${({leftActive}) => leftActive ? '' : 'translateX(100%)'} ;
    opacity: ${({leftActive}) => leftActive ? '0' : '1'} ;
    visibility: ${({leftActive}) => leftActive ? 'hidden' : 'visible'} ;
    z-index: ${({leftActive}) => leftActive ? '1' : '5'} ;

    @media screen and (max-width: 425px) {
        width: 100%;
        height: 50%;
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? '' : 'translateY(100%)'} ;
    }
`

const StyledFrom = styled.form`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 550px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 425px) {
        padding: 20px;
    }

    h1 {
        font-weight: bold;
        margin-bottom: 15px;

        @media screen and (max-width: 550px) {
            font-size: 25px;
        }
    }

    input {
        background: #eeeeee;
        border: none;
        padding: 12px 15px;
        width: 100%;
        margin: 5px 0;
    }
`

const SocialContainer = styled.div`
    font-size: 27px;
    color: #101522;
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 20px;
`

const OverlayWrap = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .6s ease-in-out;
    z-index: 50;
    transform: ${({leftActive}) => leftActive ? '' : 'translateX(-100%)'} ;

    @media screen and (max-width: 425px) {
        height : 50%;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? '' : 'translateY(-100%)'} ;
    }
`

const Overlay = styled.div`
    background: #101522;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform .6s ease-in-out;
    transform: ${({leftActive}) => leftActive ? '' : 'translateX(50%)'} ;
    
    @media screen and (max-width: 425px) {
        top: -100%;
        left: 0;
        width: 100%;
        height: 200%;
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? '' : 'translateY(50%)'} ;
    }

    h1 {
        font-weight: bold;
        margin-bottom: 15px;

        @media screen and (max-width: 550px) {
            font-size: 20px;
        }
    }
`

const OverlayLeft = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transition: transform .6s ease-in-out;
    transform: ${({leftActive}) => leftActive ? 'translateX(-20%)' : 'translateX(0)'} ;

    @media screen and (max-width: 550px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 425px) {
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? 'translateY(-20%)' : 'translateY(0)'} ;
        width: 100%;
        height: 50%;
    }
`

const OverlayRight = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transition: transform .6s ease-in-out;
    right: 0;
    transform: ${({leftActive}) => leftActive ? 'translateX(0%)' : 'translateX(20%)'} ;

    @media screen and (max-width: 550px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 425px) {
        width: 100%;
        height: 50%;
        top: unset;
        bottom: 0;
        transform: translateX(0);
        transform: ${({leftActive}) => leftActive ? 'translateY(0%)' : 'translateY(20%)'} ;
    }
`

export default SignUp
