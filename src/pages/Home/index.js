import React, { useState } from 'react'
import { useLocation } from 'wouter'

import { useGifs } from 'hooks/useGifs'

import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
	const [keyword, setKeyword] = useState('')
	const { loading, gifs } = useGifs()
	const [path, pushLocation] = useLocation()

	const handleSubmit = evt => {
		evt.preventDefault()
		pushLocation(`/search/${keyword}`)
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<button>Buscar</button>
				<input placeholder="Search a gif here" type="text" value={keyword} onChange={handleChange} />
			</form>
			<main className="App-main">
        <section className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </section>
				<section className="App-category">
          <TrendingSearches />
        </section>
      </main>
		</>
	)
}