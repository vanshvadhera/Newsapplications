import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top navbar-dark">
            <div className="container-fluid ">
                <Link className="navbar-brand text-danger" to="/" style={{cursor: "not-allowed"}} >Monkey-news <small> sbse-tezz</small></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/general" style={{ cursor: "progress" }} >General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business" style={{ cursor: "progress" }} >Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment" style={{ cursor: "progress" }} >Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health" style={{ cursor: "progress" }} >Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science" style={{ cursor: "progress" }} >Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports" style={{ cursor: "progress" }} >Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology" style={{ cursor: "progress" }} >Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
