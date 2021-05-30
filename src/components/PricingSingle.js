import React from 'react'
// import { AiFillThunderbolt } from 'react-icons/ai';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from './GlobalStyles';

const PricingSingle = ({ 
    icon,
    name,
    price,
    userNo,
    budget,
    moto
}) => {
    return (
        <PricingCard to='/sign-up'>
            <PricingCardIcon>
                {icon}
            </PricingCardIcon>
            <PricingCardPlan>{name}</PricingCardPlan>
            <PricingCardCost>$ {price}</PricingCardCost>
            <PricingCardLength>per month</PricingCardLength>
            <PricingCardFeatures>
                <li>{userNo} New Users</li>
                <li>{budget} Budget</li>
                <li>{moto}</li>
            </PricingCardFeatures>
            <StyledButton primary>Choose Plan</StyledButton>
        </PricingCard>
    )
}

const PricingCard = styled(Link)`
    background: #242424;
    box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.5);
    width: 280px;
    height: 460px;
    text-decoration: none;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 24px;
    padding-bottom: 35px;
    color: #fff;
    transition: all 0.3s ;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 425px) {
        width: 90%;

        &:hover {
        transform: none;
        }
    }
`;

const PricingCardIcon = styled.div`
    margin-bottom: 15px;
`;

const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`;

const PricingCardCost = styled.h4`
    font-size: 40px;
`;

const PricingCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 15px;
`;

const PricingCardFeatures = styled.ul`
    margin: 16px 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;

    li {
        margin-bottom: 10px;
    }
`;

export default PricingSingle
