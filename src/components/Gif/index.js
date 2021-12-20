import React from 'react'
import { Link } from 'wouter'
import './styles.css'

function Gif ({ id, title, url }) {
  return (
    <article className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </article>
  )
}

export default React.memo(Gif)