import {IMovie, IMovieResult} from "../../interface/IMovie";
import React, {FC, ReactElement} from "react";
// @ts-ignore
import StarRatings from "react-star-ratings";

// @ts-ignore
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
// @ts-ignore

interface IProps {
    movie: IMovieResult;
    page:string
}


const Movie: FC<IProps> = ({ movie,page }): ReactElement => {

    const {title,poster_path,id,vote_average} = movie
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    let navigate = useNavigate();
    const Detail = () =>{
        navigate(`/movieDet/${id}`)
    }
    return (
        <div>
            <div className={css.Movie}  onClick={Detail}>
                <img src={`${baseURL}${poster_path}`} alt={title} />
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


export {
    Movie
}