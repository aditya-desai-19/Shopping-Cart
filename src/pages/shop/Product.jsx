import React from 'react'

export const Product = (props) => {
    const{id, name, image, price} = props.data;
  return (
    <div>{name}</div>
  )
}
