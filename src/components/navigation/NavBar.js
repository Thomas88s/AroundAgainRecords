import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Around Again Records</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/records">List Your Records</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/collection">View Your Records</Link>
            </li>
           
        </ul>
    )
}
