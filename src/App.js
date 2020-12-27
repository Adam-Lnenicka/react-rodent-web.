
import React from "react"
import './scss/App.scss'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"



import Contact from "./pages/Contact.jsx"



import {Switch, Route, BrowserRouter as Router} from "react-router-dom"

function App() {  

  
    return (
        <div>

        <Router>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
        </div>
    )
}

export default App
