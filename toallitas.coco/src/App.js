import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function app () {
    return(
        <>
            <NavBar />   
            <ItemListContainer greeting={'Hola'} />
        </>
    )
}


export default App