import React from 'react';
import Logo from '../../images/logo/logo.svg'
import MobileMenu from './MobileHeader';
import DesktopMenu from './DesktopMenu';

const Header = () => {
    const menuItems = [
        {name: 'About', link: '/', className: 'text-secondary'},
        {name: 'Features', link: '/', className: 'text-secondary'},
        {name: 'Pricing', link: '/', className: 'text-secondary'},
        {name: 'Testimonials', link: '/', className: 'text-secondary'},
        {name: 'Help', link: '/', className: 'text-secondary'},
    ]
    const subItems = [
        {name: 'Sign In', link: '/', className: 'font-weight-bold text-primary'},
        {name: 'Sign Up', link: '/', className: 'btn btn-secondary font-weight-bold'},
    ]
    return (
        <div className='header container'>
            <DesktopMenu menuItems={menuItems} subItems={subItems} logo={Logo}/>
            <MobileMenu menuItems={menuItems} subItems={subItems} logo={Logo}/>
        </div>
    );
};

export default Header;