import React from 'react'

export const GifGridItem = ({title,id,url}) => {
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}</p>  
    </div>
  )
}
