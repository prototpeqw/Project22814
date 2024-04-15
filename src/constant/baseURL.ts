const baseURL = 'https://api.themoviedb.org/3'


const movies = '/discover/movie'


const genres = '/genre/movie/list'

const movie = '/movie'

const genre = '/genre'
const search = '/search/movie'


const urls ={
    movies:{
        base:movies,
        byID:(id:string) =>`${movies}/${id}`,
        byIdSearch:(id:string)=>`${movie}/${id}`,
        SearchGenre:(id:string)=>`${movies}?with_genres=${id}`,
        SearchName:(name:string)=>`${search}?query=${name}`

    },
    genre:{
        base:genres,
        byID:(id:string) =>`${genres}/${id}`,
        byIdSearch:(id:string)=>`${genre}/${id}`,
        movies: (genreId: string) => `${genres}/${genreId}/movies`

    }
}






export {
    baseURL,
    urls
}