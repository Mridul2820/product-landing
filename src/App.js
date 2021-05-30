import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import GlobalStyle from './components/GlobalStyles'
import InfoSection from './components/InfoSection'

// Components & Pages
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { homeObjTwo, homeObjThree } from './data/HomeData'
import HomePage from './pages/HomePage'
import Pricing from './pages/Pricing'

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
            <Switch>
                <Route path="/services">
                    <InfoSection {...homeObjTwo} />
                </Route>
            </Switch>
            <Switch>
                <Route path="/products">
                    <InfoSection {...homeObjThree} />
                </Route>
            </Switch>
            <Switch>
                <Route path="/pricing" component={Pricing}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
