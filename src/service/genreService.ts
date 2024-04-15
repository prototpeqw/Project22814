import {IRes} from "../interface/IRes";
import {IGenre} from "../interface/IGenre";
import {apiService} from "./apiService";
import {urls} from "../constant/baseURL";

const genreService = {
    getAll:():IRes<IGenre> => apiService.get(urls.genre.base),
}




export {
    genreService
}