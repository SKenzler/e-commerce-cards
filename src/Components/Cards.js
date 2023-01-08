import React from 'react';
import Card from './Card';
import data from './data';

const Cards = () => {
    const cards = data.map(item => {
        return (
          <Card 
                key={item.id}
                stockStats={item.stockStatus}
                
                header={item.header}
                desription={item.descrition}
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