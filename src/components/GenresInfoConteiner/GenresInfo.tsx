import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import { movieService } from "../../service/movieService";
import { genreService } from "../../service/genreService";
import { IMovie, IMovieResult } from "../../interface/IMovie";
import { Genreinfo } from "./Genreinfo";
import { IGenre } from "../../interface/IGenre";
import {ContextNAme, useSeter} from "../Context/Context";
// @ts-ignore
import css from "../MovieConteiner/Movies.module.css";


const GenresInfo = () => {
    let [query,setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    const { id } = useParams();


    const [movies, setMovies] = useState<IMovie>({
        page:1,

        results:[]

    })

    useEffect(() => {
        movieService.SerchGenre(id,page).then(({data})=>setMovies(data))
    }, [page,id]);

    const prev = () => {
        const newPage = (+page - 1).toString();
        setQuery({ page: newPage });
    };
    const next = () => {
        const newPage = (+page + 1).toString();
        setQuery({ page: newPage });
    };



    return (
        <div>


            <div className={css.Movies}>


                {movies.results.map(movie=><Genreinfo page={page} key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.display}>
                <div className={css.positionp}>{page}</div>
                <button disabled={page==='1'} className={css.button} onClick={prev}>prev</button>


                <button  className={css.button} onClick={next}>next</button>



            </div>
        </div>
    );
};

export { GenresInfo };
