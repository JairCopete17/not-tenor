import { useState, useEffect } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'

export default function TrendingSearches () {
	const [trends, setTrends] = useState([])

	useEffect (function () {
		getTrendingTerms().then(setTrends)
	}, [])

	return <Category name='Trending' options={trends} />
}