import React from 'react'
import { Card } from '../Card/Card'

export const ItemList = ({productList}) => {

  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      {
        productList.map(item => <Card key={item.id} item={item} />)
      }
    </div>

  )
}