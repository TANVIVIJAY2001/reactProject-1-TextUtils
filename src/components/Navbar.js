import React from 'react'
// shortcut for react based function : rfc + etr
import PropTypes from 'prop-types'
// shortcut for proptypes: impt + etr


export default function Navbar(props) {
    return (
        // using curly braces to involve javascript and to enable dark mode
        // using back ticks to implement template literals in the string
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about"> About</a>
                        </li> */}

                    </ul>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

// shortcut for typing PropTypes.strig: pts + etr
//stuff inside curly bracket is an object
// proptypes define the type of the prop

Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     aboutText: PropTypes.string.isRequired
 }

// //Default props specifies which prop to pass when nothing is passed

 Navbar.defaultProps = {
     title: "Set title here",
     aboutText: "About"
 };