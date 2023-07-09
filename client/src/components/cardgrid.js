import React from 'react'

const cardgrid = ({item, name}) => {
  return (
    <div>
      <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
            <h1 className='cardh1'>{name}</h1>
            </div>
            <div className='card-back'>
            <h1 className='cardbackh1'>{item}</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default cardgrid
