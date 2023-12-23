import React from "react";

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from "./components/NavBar/NavBar";

export default function app () {
    return(
        <>
            <NavBar />   
            <ItemListContainer greeting={'Hola'} />
        </>
    )
}

