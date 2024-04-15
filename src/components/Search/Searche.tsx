import {ContextNAme, useSeter} from "../Context/Context";
import React, {FC, useEffect, useState} from "react";
import {IMovie, IMovieResult} from "../../interface/IMovie";
import {useNavigate, useSearchParams} from "react-router-dom";
import {movieService} from "../../service/movieService";


// @ts-ignore
import css from './Search.module.css'
// @ts-ignore
import StarRatings from "react-star-ratings";
interface Iprops{
    mov:IMovieResult
}


const Searche:FC<Iprops> = ({mov}) => {
    const {id,title,poster_path,overview,release_date,genres,vote_average} =mov



    let [query,setQuery] = useSearchParams('?name=');
    let [querypage,setQuerypage] = useSearchParams({page:'1'});
    const name = query.get('name')
    const page = querypage.get('page')






    const navigate = useNavigate()
    let {selectedGenre,setSelectedGenre} = ContextNAme();
    const movedt =()=>{
        navigate(`/movieDet/${id}`)
    }

    const baseURl = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <div onClick={movedt}>


                <div className={css.Search}>

                        <div className={css.Searchv2} key={id}>
                            <img className={css.img} src={`${baseURl}${poster_path}`} alt={''} />
                            <h3 className={css.h3v2}>{title}</h3>

                        </div>

                    <div>

                        <div className={css.page}>{page}</div>



                    </div>


                </div>
            </div>
        </div>
    );
};

export  {Searche};