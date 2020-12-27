import React from "react"
import {Link, BrowserRouter} from "react-router-dom"

function Header() {
    return (
        <header>
            <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/help">help</Link></li>

            </ul>
            </BrowserRouter>
        </header>
    )
}

export default Header