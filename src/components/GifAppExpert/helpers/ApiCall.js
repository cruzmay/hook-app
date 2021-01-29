  export const ApiCall = async(category) => {
            const API_KEY = 'hiCmQqbsvAjDLJqml5KWs1UAFSV47GVz'
            const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=20&api_key=${API_KEY}`
            const response = await fetch(URL);
            const {data} = await response.json()

            const images = data.map( img =>{
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }
            })
            // console.log(images)
            return images
        }
        