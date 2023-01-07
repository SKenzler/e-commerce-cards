import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import shoe from '../images/nike-air-jordan.png';

const Card = ()  => {
    return (  
        <div className='card'>
            <div className='status-tag'>In Stock</div>

            <img src={shoe} className='' alt="Shoe for Sale" />

            <h1 className='card-header'>Nike Zoom Blazer</h1>
            <HiStar /> <HiStar /> <HiStar /> <HiStar /> <HiOutlineStar />

            <div className='card-content'>
                <h3 className='card-sub-heading'>Desciption</h3>
                <hr />
                <p className='card-content'>Lörem ipsum genade menskonst välogi
                lor poligen koliga. Plahässade kal sud, eftersom nymäda, om demiaktiv., sotes. Ladeck nåras.
                </p>
                <h2 className='card-price'>$240</h2>
                <button type='submit' className='card-btn'>Add to cart</button>
            </div>

        

        
        </div>
    );
}

export default Card;