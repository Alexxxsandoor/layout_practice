import React from 'react';

const NavMenu = ({menuItems, className}) => {
    return (
        <ul className={'d-flex justify-content-between align-items-center' + (className ? ' ' + className : '')}>
            {menuItems.map((item, index) => <li><a key={index} href={item.link} className={item.className}>{item.name}</a></li>)}
        </ul>
        
    );
};

export default NavMenu;