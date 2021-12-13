import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
	const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {
    setLoading(true)
    //Se recupera la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //Se guarda la keyword al localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])

	return {loading, gifs}
}