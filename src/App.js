import React from 'react'
import GlobalStyle from './components/GlobalStyles'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            Landing Page
        </div>
    )
}

export default App
