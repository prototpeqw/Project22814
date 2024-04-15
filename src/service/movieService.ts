import {IRes} from "../interface/IRes";
import {apiService} from "./apiService";
import {urls} from "../constant/baseURL";
import {IMovie, IMovieResult} from "../interface/IMovie";
import {IGenre} from "../interface/IGenre";


const movieService = {
    getAll:(page?:string):IRes<IMovie>=>apiService.get(urls.movies.base, {params:{page}}),
    getSearcById:(id:any):IRes<IMovieResult> => apiService.get(urls.movies.byIdSearch(id)),
    SerchGenre:(id:string,page?:string):IRes<IMovie> => apiService.get(urls.movies.SearchGenre(id), {params:{page}}),
    SearnMovieName:(name:string,page:string):IRes<IMovie> =>apiService.get(urls.movies.SearchName(name),{params:{page}})


}


export {
    movieService
}