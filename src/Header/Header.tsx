import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useContextProvider, useSeter} from "../components/Context/Context";
// @ts-ignore
import css from "./Header.module.css";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const Header = () => {
    const context = useContextProvider();
    let seter = useSeter();

    const handleChange = () => {
        context.toggleTurn();
    };

    React.useEffect(() => {
        document.documentElement.style.backgroundColor = context.turn ? "black" : "snow";
    }, [context.turn]);
    let navigate = useNavigate();
    const back =()=> {
        navigate(seter())
    }
    return (
        <div className={css.Header}>
            <h1 className={css.Home} onClick={back}>Home</h1>
            <h1>
                <NavLink to={"movies"} className={css.NavLink}>Movies</NavLink>
            </h1>
            <h1>
                <NavLink to={"genre"} className={css.NavLink}>Genres</NavLink>
            </h1>
            <h1>
                <NavLink to={"search"} className={css.NavLink}>Search</NavLink>
            </h1>
            <h1 className={css.Themes}>
                Theme
            </h1>
            <div>
                <label className={`switch ${css.switch}`} >
                    <input type="checkbox" checked={context.turn} onChange={handleChange} />
                    <span className={`slider ${css.slider}`}></span>
                </label>


            </div>
        </div>
    );
};

export { Header };

