export const getGif = async ( series ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( series ) }&limit=10&api_key=ULJDAMGKmLOA4lAkMBAW29iHfz7paM9s`;
    const resp = await fetch( url );
    const { data }  = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return  gifs;
    
}