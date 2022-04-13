import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import './home.css'
function Home() {
    const menuItems = [
        { key: "crud/App", "displayName": "CRUD", isDefaut: true },
        { key: "auth/home", "displayName": "Auth", isDefaut: false },
        { key: "Rxjs/App", "displayName": "RXJS", isDefaut: false },
        { key: "Redux/App", "displayName": "Redux", isDefaut: false }
    ];



    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                <div id="navbarResponsive">
                        <span style={{ color: 'white', fontSize: '1.6rem', fontWeight:500 }}>AMADIS</span>
                        <ul className="navbar-nav">
                            {menuItems.map((menu, i) =>
                                <li className='nav-item mx-0 mx-lg-1' key={i}>
                                    <Link to={'/' + menu.key} className='li' style={{ color: 'white' }}>{menu.displayName}</Link>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <span className="home">Welcome to Amadis Global</span>
        </div>

    )
}
export default Home;