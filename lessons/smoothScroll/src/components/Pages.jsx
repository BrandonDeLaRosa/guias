import React from 'react';
import { Link } from 'react-scroll';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Pages = () => {
    return (
        <div>
            <Link to='page2' smooth={true} duration={5000}>Page2</Link>
            <Page1/>
            <Page2/>
            <Page3/>
        </div>
    );
};

export default Pages;