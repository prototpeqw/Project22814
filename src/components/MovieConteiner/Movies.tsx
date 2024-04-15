import {ReactElement, useEffect, useState} from "react";
import { IMovie,  } from "../../interface/IMovie";
import {Movie} from "./Movie";
import {movieService} from "../../service/movieService";
import {useSearchParams} from "react-router-dom";
// @ts-ignore
import css from './Movies.module.css'

const Movies = (): ReactElement => {
    const [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page') ?? '1'

    const [movies, setMovies] = useState<IMovie>({
        page: 1,
        results: [],

    });

    useEffect(() => {

            movieService.getAll(page).then(({data})=>{
                setMovies(data)
            })

    }, [page]);

    const prev = () => {
        const newPage = (+page - 1).toString();
        setQuery({ page: newPage });
    };
    const next = () => {
        const newPage = (+page + 1).toString();
        setQuery({ page: newPage });
    };
    console.log(page)
    return (
        <div>
            <div className={css.Movies}>
                {movies.results.map(movie => (
                    <Movie key={movie.id} movie={movie} page={page} />
                ))}
            </div>


            <div className={css.display}>
                <div className={css.positionp}>{page}</div>

                <button disabled={page==='1'} className={css.button} onClick={prev}>prev</button>


                <button  className={css.button} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Movies};