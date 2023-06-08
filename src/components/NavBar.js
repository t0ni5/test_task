import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const NavBar = ({ calculateQuantity }) => {
    const cart = useSelector((state) => state.cart)
    return (
        <nav className="nav">
            <Link to="/" className="siteTitle">
                Online Shop
            </Link>

            <ul>
                <li>
                    <Link to="/cart" className="link">
                        Cart
                    </Link>
                </li>
                <li>
                    <span className="link"> {calculateQuantity()} </span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
