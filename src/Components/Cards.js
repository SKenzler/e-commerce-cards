import React from 'react';
import Card from './Card';
import data from '../data';
console.log(data);
const Cards = () => {
    const cards = data.map(item => {
        return (
          <Card 
                key={item.id}
                stockStats={item.stockStatus}
                image={item.image}
                header={item.header}
                description={item.description}
                price={item.price}
          />
        )
      })

      return (
        <>
          {cards}
        </>
      )

}

export default Cards;