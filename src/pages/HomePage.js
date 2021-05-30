import React from 'react'
import InfoSection from '../components/InfoSection'
import Pricing from './Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../data/HomeData'

const HomePage = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </div>
    )
}

export default HomePage
