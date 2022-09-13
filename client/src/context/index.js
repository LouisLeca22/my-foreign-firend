import {initialState, reducer } from "./reducer";
import React, { createContext, useReducer} from "react";

export const Context = createContext({ state: initialState, dispatch: () => {}})


export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}