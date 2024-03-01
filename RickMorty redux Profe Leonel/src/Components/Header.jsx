import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/locationInfo/1">Location Info</Link>
            <Link to="/characterInfo/1">Chracater Info</Link>
        </div>
    );
};

export default Header;