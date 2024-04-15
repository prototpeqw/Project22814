import {createBrowserRouter, Navigate, useParams} from "react-router-dom";
import {MainLayout} from "./loyauts/MainLayout";
import {MoviePAge} from "./page/MoviePAge";
import {GenrePage} from "./page/GenrePage";
import React, {FC} from "react";
import {MoviesDet} from "./components/MovieDetConteiner/MoviesDet";
import {movieService} from "./service/movieService";
import {IMovie} from "./interface/IMovie";
import {MoviesDetailsPage} from "./page/MoviesDetailsPage";
import {GenresInfoPage} from "./page/GenresInfoPage";
import {Theme} from "./components/Theme/Theme";
import {Search} from "./components/Search/Search";




const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,children:[
            {
              index:true,element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviePAge/>
            },
            {
                path:'genre',element:<GenrePage/>
            },
            {
                path:'movieDet/:id',element:<MoviesDetailsPage/>
            },
            {
                path:'genresInfo/:id',element:<GenresInfoPage/>
            },
            {
                path:'search',element:<Search/>
            }
        ]
    }
])



    




export {
    router
}