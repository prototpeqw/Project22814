import {useParams, useSearchParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {movieService} from "../../service/movieService";
import {IMovie, IMovieResult} from "../../interface/IMovie";
import {MovieDet} from "./MovieDet";
import {IGenre} from "../../interface/IGenre";
import {genreService} from "../../service/genreService";


const MoviesDet = () => {
    const {id} = useParams()
    const [movieDet, setMovieDet] = useState<IMovieResult|null>(null)

    useEffect(() => {
        movieService.getSearcById(id).then(({data})=>setMovieDet(data))
    }, [id]);


    return (
        <div>
            {movieDet && <MovieDet movdet={movieDet} />}

        </div>
    );
};

export  {MoviesDet};