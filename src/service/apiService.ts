import axios from "axios";
import {baseURL} from "../constant/baseURL";
import {request} from "http";


const apiService = axios.create({baseURL})


const mytokens ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTg4NmIzY2UzZTA3NDY5NzIxNTVmY2FmN2MyNWFhYiIsInN1YiI6IjY2MTU5MWVlNTkwMDg2MDE2MjdlMGI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RruQbla3TVP-UZ8PlAC5o_Zq4VXXzoPtGQlE1gGaqvU'

apiService.interceptors.request.use(request=>{
    if (mytokens){
        request.headers.Authorization =`Bearer ${mytokens}`
    }
    return request
})





export {
    apiService
}