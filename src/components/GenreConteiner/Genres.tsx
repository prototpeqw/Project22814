import {useEffect, useState} from "react";
import {IGenre} from "../../interface/IGenre";
import {genreService} from "../../service/genreService";
import {Genre} from "./Genre";
// @ts-ignore
import css from './Genre.module.css'
import {IMovie} from "../../interface/IMovie";
import {GenresInfo} from "../GenresInfoConteiner/GenresInfo";
import {ContextNAme} from "../Context/Context";

const Genres = () => {


    const [genres, setGenres] = useState<IGenre>({
        genres:[]
    })
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data))

    }, []);




    return (
        <div className={css.Genre} >
            {genres.genres.map(genre=><Genre key={genre.id} genres={genre}/>)}
            <div>

            </div>
        </div>
    );
};

export  {Genres};