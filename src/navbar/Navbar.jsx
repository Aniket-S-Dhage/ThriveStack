import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fs-5">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand text_color" href="#">Contacts</NavLink>


                    <div>
                        <ul className="navbar-nav me-auto ">

                            <li className="nav-item ">
                                <NavLink className="nav-link text_color" to="register/">Add New
                                    Contact</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link text_color" to="show/">Show Contacts</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar