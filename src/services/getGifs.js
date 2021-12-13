const apiKey = 'ufDXCBt1nvtDQniaQkJlpU0lHUuitc9R'

export default function getGifs ({keyword = 'null'} = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

	return fetch(apiURL)
		.then(res => res.json())
		.then(response => {
			const {data} = response
			const gifs = data.map(image => {
				const { images, id, title } = image
				const { url } = images.downsized_medium
				return { id, title, url }
			})
			return gifs
		})
}