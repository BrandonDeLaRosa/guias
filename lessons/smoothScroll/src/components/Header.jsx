import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Link smooth to="#page1">Page1</Link>
            <Link smooth to="#page2">Page2</Link>
            <Link smooth to="#page3">Page3</Link>
            <Link smooth to="/pages">Pages</Link>
        </div>
    );
};

export default Header;