import React from 'react'
import PricingSingle from '../components/PricingSingle';
import { IconContext } from 'react-icons/lib';

import { priceStarter, priceGold, priceDiamond } from '../data/PricingData';
import styled from 'styled-components';

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingHeading>Our Services</PricingHeading>
                <PricingWrapper>
                    <PricingSingle {...priceStarter} />
                    <PricingSingle {...priceGold} />
                    <PricingSingle {...priceDiamond} />
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

const PricingSection = styled.div`
    padding: 50px 0 ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;

    @media screen and (max-width: 425px) {
        padding: 20px 0 ;
    }
`;

const PricingHeading = styled.h1`
    color: #000;
    font-size: 48px;
    margin-bottom: 24px;
    text-align: center;

    @media screen and (max-width: 425px) {
        font-size: 35px;
    }
`;

const PricingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`;

export default Pricing
