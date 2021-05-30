import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import GlobalStyle from './components/GlobalStyles'

// Components & Pages
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
            <Switch>
                <Route path="/pricing" exact component={Pricing}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
