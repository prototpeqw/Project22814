import {IMovie, IMovieResult} from "../../interface/IMovie";
import React, {FC, useEffect, useState} from "react";
// @ts-ignore
import css from './MovieDet.module.css'
import {IGenre, IGenreIds} from "../../interface/IGenre";
import {genreService} from "../../service/genreService";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import StarRatings from "react-star-ratings";
interface IProps{
    movdet:IMovieResult



}

const MovieDet:FC<IProps> = ({movdet}) => {



        const {id,title,poster_path,genres,overview,vote_average,release_date} = movdet
    console.log(genres)
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    let navigate = useNavigate();
    const genre = () => {
        const genreIds = genres.map(genre => genre.id).join(',');
        navigate(`/genresInfo/${genreIds}`);
    };
    return (
        <div className={css.MoiveDet}>
            <h1>{title}</h1>
            <img src={`${baseURL}${poster_path}`} alt={title}/>
            <h3 className={css.overview}>Overview:<br/>{overview}</h3>
            <h3 className={css.realse}>Realse:<br/>{release_date}</h3>

            <ul onClick={genre}>
                {genres.map((genre) => (
                    <li className={css.det} key={genre.id}>{genre.name}
                    </li>
                ))}
            </ul>\
            <div className={css.Rating}>
                <h1>Rating</h1>

            </div>
            <div className={css.starsdet}>
                <StarRatings
                    rating={vote_average}
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

export  {MovieDet};