import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbarItem active">
                <Link className="navbarLink" to="/">Around Again Records</Link>
            </li>
            <li className="navbarItem">
                <Link className="navbarLink" to="/records">List Your Records</Link>
            </li>
            <li className="navbarItem">
                <Link className="navbarLink" to="/collection">Collection</Link>
            </li>
           
        </ul>
    )
}