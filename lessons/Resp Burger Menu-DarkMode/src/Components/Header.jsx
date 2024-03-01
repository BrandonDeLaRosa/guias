import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = ({darkMode}) => {

    const [isVisible, setIsVisible] = useState(false)
    const showNavbar = () => {
        setIsVisible(!isVisible)
    }

    return (

        <header >
            {
                isVisible ?

                    (
                        <>
                            <nav className={isVisible ? "linksMenu" : "links"}>

                                <Link onClick={showNavbar} className='link' to="/"> Home </Link>
                                <Link onClick={showNavbar} className='link' to="/login"> Login </Link>
                                <Link onClick={showNavbar} className='link' to="/locations"> Locations </Link>
                                <Link onClick={showNavbar} className='link' to="/characters"> Characters </Link>

                                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                                    <i style={{color: darkMode? "white" : "black"}} class="fa-regular fa-circle-xmark"></i>
                                </button>

                            </nav>

                            <button className='nav-btn' onClick={showNavbar}>
                                <i style={{color: darkMode? "white" : "black"}} class="fa-solid fa-bars"></i>
                            </button>
                        </>
                    ) :
                    (
                        <>
                            <nav className={isVisible ? "linksMenu" : "links"}>

                                <Link className='link' to="/"> Home </Link>
                                <Link className='link' to="/login"> Login </Link>
                                <Link className='link' to="/locations"> Locations </Link>
                                <Link className='link' to="/characters"> Characters </Link>

                                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                                    <i style={{color: darkMode? "white" : "black"}} class="fa-regular fa-circle-xmark"></i>
                                </button>

                            </nav>

                            <button className='nav-btn' onClick={showNavbar}>
                                <i style={{color: darkMode? "white" : "black"}} class="fa-solid fa-bars"></i>
                            </button>
                        </>
                    )
            }
        </header>
    );
};

export default Header;