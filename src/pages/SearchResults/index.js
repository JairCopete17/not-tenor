import { useGifs } from '../../hooks/useGifs'

import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'

export default function SearchResults ({ params }) {
  const { keyword } = params
	const { loading, gifs } = useGifs({ keyword })

  return <>
    {loading
      ? <Spinner />
      : <>
          <h3 className="App-title">{keyword}</h3>
          <ListOfGifs gifs={gifs} />
        </>
    }
  </>
}