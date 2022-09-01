import React, { useState } from 'react'
import './Count.css'

export const Count = ({stock, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial)

    const addCounter = () => {
        count < stock && setCount( count + 1 )
    }

    const subtractCounter = () => {
        count > initial && setCount( count - 1 )
    }


  return (
    <div className='counter-container'>
        <p className='counter'>{count}</p>
        <div className='button-container'>
            <button className='button' onClick={subtractCounter}>-</button>
            <button className='button' onClick={addCounter}>+</button>
        </div>
        <button className='button button-buy'>Añadir al carrito</button>
    </div>
  )
}
