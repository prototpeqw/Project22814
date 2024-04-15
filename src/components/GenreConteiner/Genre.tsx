import {IGenre, IGenreIds} from "../../interface/IGenre";
import {FC, useContext, useState} from "react";
// @ts-ignore
import css from './Genre.module.css'
import {useNavigate} from "react-router-dom";
import {ContextNAme} from "../Context/Context";
import {log} from "util";

// @ts-ignore

interface IProps{
    genres:IGenreIds
}
const Genre:FC<IProps> = ({genres}) => {
    const {id, name} = genres
    const navigate = useNavigate()










    const genresSave = () =>{
        navigate(`/genresInfo/${id}`)



    }

    return (
        <div>

            <div className={css.Genre} onClick={genresSave}>

                    <h1>{name}</h1>

            </div>
        </div>
    );
};

export  {Genre};