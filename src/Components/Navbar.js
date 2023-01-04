import React from 'react';
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-brand'>
                <HiOutlineShoppingBag size={30} />
                <div className='brand-text'>Shopping Mall</div>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>
                        <Link to="/index" target="_blank">home</Link>
                    </li>
                    <li>
                        <Link to="/index" target="_blank">about</Link>
                    </li>
                    <li>
                        <Link to="/index" target="_blank"><HiOutlineShoppingCart size={30} /></Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;