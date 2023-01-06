import React from 'react';
import heroImage from '../images/hero-shoe-image.jpg'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className='hero-section'>
            <div className='hero-content'>
                <h3>Get your running shoes on</h3>
                <h1>It's time to shop</h1>
                <p>Laborum eiusmod do nisi ea occaecat labore
                    cupidatat ipsum laborum est reprehenderit mollit aute eiusmod. Ad laborum
                    exercitation voluptate est adipisicing duis duis minim commodo cillum in.
                    Aliquip dolor pariatur sit quis laborum. Excepteur deserunt mollit est reprehenderit
                    cupidatat ea deserunt. Proident aliquip adipisicing exercitation enim magna cupida.</p>
                    <Link to='/Card'>
                        <button type='button' className='btn-cart'><HiOutlineShoppingCart size={25} />&nbsp; Start Shopping</button>
                    </Link>
            </div>
            <div className='img-box'>
                <img src= {heroImage} className='hero-img' alt="A runner putting on shoes" />
            </div>
            
        </section>
     );
}

export default Home;