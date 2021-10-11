import React from 'react';
import './Header.css'

// Header Information
const Header = () => {
    return (
        <div className='header-info'>
            <div >
                <h2 className='header-title'>Military Unit</h2>
                <h4 className="header-title-info">Military unit, a group having a prescribed size and a specific combat or support role within a larger military organization.</h4>
                <h2 className='budget-title'>Budget $200 Million</h2>
            </div>
        </div>
    );
};

export default Header;