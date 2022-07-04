export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?apikey=v2j4nFZlsxeYenPYXCRaN1qFu1CJ6J6j&q=${category}&limit=20`
    const resp = await fetch( url )
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
}