import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyles'

// Components & Pages
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
        </Router>
    )
}

export default App
