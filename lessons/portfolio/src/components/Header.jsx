import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({darkMode, setDarkMode}) => {

    const [englishFile, setEnglishFile] = useState(false)
    const navigate = useNavigate()

    const language = () => {
        navigate(englishFile? '/inicio' : '/')
        setEnglishFile(!englishFile)
    }

    return (
        <div>
            <button onClick={() => setDarkMode(!darkMode)}>{darkMode? "light" : "dark"}</button>
            <button onClick={language}>
                {englishFile ? "Español" : "English"}
            </button> <br />
            {
                englishFile ?
                    (
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/info">Information</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact me</Link>
                        </>
                    )
                    :
                    (
                        <>
                            <Link to="/inicio">Inicio</Link>
                            <Link to="/sobre">Sobre Mi</Link>
                            <Link to="/informacion">Informacion</Link>
                            <Link to="/proyectos">Proyectos</Link>
                            <Link to="/contacto">Contactame</Link>
                        </>
                    )
            }
        </div>
    );
};

export default Header;