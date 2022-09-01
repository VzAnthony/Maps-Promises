import React from 'react'
import { Card } from '../Card/Card'

export const ItemList = ({productList}) => {
  console.log('Soy product List', productList)





  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      {
        productList.map(item => <Card key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} />)
      }
    </div>

  )
}