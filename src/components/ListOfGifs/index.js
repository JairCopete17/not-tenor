import React from 'react'
import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({ gifs }) {
	return <section className='ListOfGifs'>
		{gifs.map(({ id, title, url }) =>
			<Gif
				id={id}
				title={title}
				key={id}
				url={url}
			/>
		)}
	</section>
}
