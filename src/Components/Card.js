import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const starStyle = { color: '#ff06fb', fontSize: '1.8em'};
const fillStar = "<HiStar style={starStyle} />";
const outlineStar = "<HiOutlineStar style={starStyle} />";

const Card = (props)  => { 
    return (  

        <div className='card'>
            
            {props.statusStock === 0  ? <div className='status-tag'>Out of stock</div> : <div className='status-tag'>Available</div>}

            <div className='img-box'>
                <img src={props.image} className='card-img' alt="Shoe for Sale" />
            </div>

            <div className='card-content'>

                <h1 className='card-header'>{props.header}</h1>

                <div className='rating-icons'>
                    {(() => {
                        switch ({props.rating}} {
                            case 3: return 'fillStar outlineStar fillStar outlineStar outlineStar';
                            case 2: return fillStar fillStar outlineStar outlineStar outlineStar;
                        }
                    })()}   
                </div>

          
                <h3 className='card-subheading'>Desciption</h3>
                <div className='card-ruler'></div>

                <p className='card-desc'>{props.description}
                </p>

                <h2 className='card-price'>${props.price}</h2>

                <button type='submit' className='card-btn'>Add to cart</button>
            </div>
        </div>
    );
}

export default Card;