import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';
import shoe from '../images/nike-AJ.png';

const starStyle = { color: '#ff06fb', fontSize: '1.8em'};

const Card = ()  => {
    return (  
        <div className='card'>
            <div className='status-tag'>In Stock</div>

            <div className='img-box'>
                <img src={shoe} className='card-img' alt="Shoe for Sale" />
            </div>

            <div className='card-content'>

                <h1 className='card-header'>Nike Zoom Blazer</h1>

                <div className='rating-icons'>
                    <HiStar style={starStyle} /> <HiStar style={starStyle} /> <HiStar style={starStyle} /> <HiStar style={starStyle} /> <HiOutlineStar style={starStyle} />
                </div>

          
                <h3 className='card-subheading'>Desciption</h3>
                <div className='card-ruler'></div>

                <p className='card-desc'>Lörem ipsum genade menskonst välogi
                lor poligen koliga. Plahässade kal sud, eftersom nymäda, om demiaktiv., sotes. Ladeck nåras.
                </p>

                <h2 className='card-price'>$240</h2>

                <button type='submit' className='card-btn'>Add to cart</button>
            </div>
        </div>
    );
}

export default Card;