import {IGenre, IGenreIds} from "../../interface/IGenre";
import React, {FC} from "react";
import {IMovieResult} from "../../interface/IMovie";
// @ts-ignore
import css from "../MovieConteiner/Movie.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {ContextNAme} from "../Context/Context";
import {Search} from "../Search/Search";
// @ts-ignore
import StarRatings from "react-star-ratings";

interface Iprops {
    movie:IMovieResult
    page:string

}
const Genreinfo:FC<Iprops> = ({movie,page}) => {
    const {title,poster_path,id} = movie

    const baseURl = 'https://image.tmdb.org/t/p/w500'
    let navigate = useNavigate();
    const Detail = () =>{
        navigate(`/movieDet/${id}`)
    }



    return (
        <div>

            <div className={css.Movie} onClick={Detail}>
                <img src={`${baseURl}${poster_path}`} alt={title} />
            </div>
            <h3 className={css.Movies}>
                {title}
            </h3>
            <div className={css.stars}>
                <StarRatings
                    rating={movie.vote_average}
                    starRatedColor="orange"
                    numberOfStars={10}
                    name="rating"
                    starDimension="20px"
                    starSpacing="1px"
                />
            </div>


        </div>
    );
};

export  {Genreinfo};