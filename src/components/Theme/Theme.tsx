import React from "react";
import { useContextProvider } from "../Context/Context";
// @ts-ignore
import css from './Theme.module.css'

const Theme = () => {
    const context = useContextProvider();
    const handleClick = () => {
        context.toggleTurn();
    };

    React.useEffect(() => {
        document.documentElement.style.backgroundColor = context.turn ? "snow" : "black";
    }, [context.turn]);

    return (
        <div>
            <button onClick={handleClick}>Theme</button>
        </div>
    );
};

export { Theme };