import { useCallback } from 'react'
import { useLocation } from 'wouter'

import { useGifs } from 'hooks/useGifs'

import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

export default function Home() {
	const { gifs } = useGifs()
	// eslint-disable-next-line no-unused-vars
	const [_, pushLocation] = useLocation()

	const handleSubmit = useCallback(({ keyword	}) => {
		pushLocation(`/search/${keyword}`)
	},[pushLocation])

	return (
		<>
			<SearchForm onSubmit={handleSubmit}/>
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