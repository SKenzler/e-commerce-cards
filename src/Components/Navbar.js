import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-brand'>
                <HiOutlineShoppingBag size={30} />
                <div className='brand-text'>Shopping Mall</div>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>shop</li>
                </ul>
            </div>

        </div>

    )
}

export default Navbar;