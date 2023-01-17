import React from 'react';
import Card from './Card';
import data from '../data';

const Cards = () => {
    const cards = data.map(item => {
        return (
          <Card 
                key={item.id}
                stockStatus={item.stockStatus}
                image={item.image}
                header={item.header}
                rating={item.rating}
                description={item.description}
                price={item.price}
          />
        )
      })

      return (
        <div className='card-container'>
          {cards}
        </div>
      )

}

export default Cards;