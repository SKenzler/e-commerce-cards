import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const starStyle = { color: '#ff06fb', fontSize: '1.8em'};
const fillStar = <HiStar style={starStyle} />;
const outlineStar = <HiOutlineStar style={starStyle} />;

const displayRating = (rating, fillIcon, outlineIcon) => {

    switch (rating) {
        case 1: return [fillIcon, outlineIcon, outlineIcon, outlineIcon, outlineIcon];
        case 2: return [fillIcon, fillIcon, outlineIcon, outlineIcon, outlineIcon];
        case 3: return [fillIcon, fillIcon, fillIcon, outlineIcon, outlineIcon];
        case 4: return [fillIcon, fillIcon, fillIcon, fillIcon, outlineIcon];
        case 5: return [fillIcon, fillIcon, fillIcon, fillIcon, fillIcon];
        default: return 'Not Rated';
    }
}

const displayStockStatus = (stockStatus) => {
    
    return (stockStatus < 1 ? <div className='status-tag'>Out of stock</div> : <div className='status-tag'>Available</div>)
}

const Card = (props)  => {
   
    return (

        <div className='card'>

            {displayStockStatus(props.stockStatus)}  

            <div className='img-box'>
                <img src={props.image} className='card-img' alt="Shoe for Sale" />
            </div>

            <div className='card-content'>

                

                <h1 className='card-header'>{props.header}</h1>

                <div className='rating-icons'>
                       {displayRating(props.rating, fillStar, outlineStar)}
                </div>
          
                <h3 className='card-subheading'>Desciption</h3>
                <div className='card-ruler'></div>

                <p className='card-desc'>{props.description}
                </p>

                <h2 className='card-price'>${props.price}</h2>

                <button type='submit' className='card-btn'>Add to cart</button>
            </div>
        </div>
    )
}

export default Card;