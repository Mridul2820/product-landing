import React from 'react'
import GlobalStyle from './components/GlobalStyles'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
        </Router>
    )
}

export default App
