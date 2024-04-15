import {IGenreIds} from "./IGenre";

export interface IMovie {
    page: number;
    results: IMovieResult[];

}

export interface IMovieResult {
    adult: boolean;
    backdrop_path: string;
    genres:IGenreIds[]
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}