import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"



export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === "light" ? "dark" : "light"}`} to="/">{props.title}</Link>
                <button className={`navbar-toggler bg-${props.mode === "light" ? "" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <Link className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`} aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/About">{props.aboutEditor}</Link>
                        </li>


                    </ul>

                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>


                    {/* <div className="p-3 mb-2 m-2 bg-warning border " id='warning' onClick={props.custubMode}></div>
                    <div className="p-3 mb-2 m-2 bg-success border " id='success' onClick={props.custubMode}></div> */}


                </div>




            </div>


        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutEditor: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set_Title_here",
    aboutEditor: "About_text_here"
}