import {ContextNAme, useSeter} from "../Context/Context";
import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interface/IMovie";
import {useNavigate, useSearchParams} from "react-router-dom";
import {movieService} from "../../service/movieService";


// @ts-ignore
import css from './Search.module.css'
import {IGenreIds} from "../../interface/IGenre";
import {Searche} from "./Searche";



const Search = () => {
    const [movies, setMovies] = useState<IMovie>({
        page:1,
        results:[]
    })

    let [query,setQuery] = useSearchParams('?name=');
    let [querypage,setQuerypage] = useSearchParams({page:'1'});
    const name = query.get('name')
    const page = querypage.get('page')


    useEffect(() => {
            movieService.SearnMovieName(name,page).then(({data})=>setMovies(data))
    }, [name,page]);
    const handleSearch = () => {
        setQuery(`?name=${name}`);
    };

    const prev = () => {
        const newPage = (+page - 1).toString();
        setQuery({ page: newPage });
    };
    const next = () => {
        const newPage = (+page + 1).toString();
        setQuery({ page: newPage });
    };
    const navigate = useNavigate()
    let {selectedGenre,setSelectedGenre} = ContextNAme();
    const [value, setValue] = useState('');




    const baseURl = 'https://image.tmdb.org/t/p/w500'


    return (
        <div>
            <div>
                <input className={css.input} type="text" placeholder={'Enter movie name'} onChange={(e) => setQuery(`?name=${e.target.value}`)} />
                <button className={css.button} onClick={handleSearch}>Search</button>
            </div>
            <div className={css.Search}>
                {movies.results.map(mov=><Searche key={mov.id} mov={mov}/>)}

            </div>
            <div>
                <button disabled={page==='1'} className={css.buttonv2} onClick={prev}>prev</button>
                <button className={css.buttonv2} onClick={next}>next</button>
            </div>

        </div>
    );
};

export  {Search};