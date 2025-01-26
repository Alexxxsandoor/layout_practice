import React from 'react';
import NavMenu from './NavMenu';

const DesktopMenu = ({menuItems, subItems, logo}) => {
    return (
        <nav className='desktop-menu  d-flex justify-content-between align-items-center'>
            <div className='logo'><img src={logo} alt='logo'/></div>
            <NavMenu className="desktop-menu" menuItems={menuItems}/>
            <NavMenu className="desktop-menu" menuItems={subItems}/>
        </nav>
    );
};

export default DesktopMenu;