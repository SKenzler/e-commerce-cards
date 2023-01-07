import React from 'react';
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <HiOutlineShoppingBag size={25} />
                <div className='brand-text'><span className='accent-text'>Shopping</span> Mall</div>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/Card"><HiOutlineShoppingCart size={24} /></Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;