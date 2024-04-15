import React, {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState} from "react";

const Context = createContext<{ turn: boolean, toggleTurn: () => void }>({ turn: false, toggleTurn: () => {} });


const ContextSeter = createContext(null)


interface GenreContextType {
    selectedGenre: string;
    setSelectedGenre: Dispatch<SetStateAction<string>>;
}
const GenreContextName = createContext<GenreContextType | undefined>(undefined);

const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [turn, setTurn] = useState<boolean>(false);
    const [set,seter] = useState(null)

    const seTer =()=>{
        seter(!set)
    }
    const toggleTurn = () => {
        setTurn(!turn);
    };

    return (
        <Context.Provider value={{ turn, toggleTurn }}>
            <ContextSeter.Provider value={seTer}>
                <GenreContextName.Provider value={{selectedGenre,setSelectedGenre}}>
                    {children}

                </GenreContextName.Provider>
            </ContextSeter.Provider>

        </Context.Provider>
    );
};

const useContextProvider = () => useContext(Context);

const useSeter = ()=> useContext(ContextSeter)
const ContextNAme =()=>useContext(GenreContextName)

export {
    ContextProvider,
    useContextProvider,
    useSeter,
    ContextNAme
};