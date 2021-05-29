import React from 'react'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../data'

const HomePage = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
        </div>
    )
}

export default HomePage
