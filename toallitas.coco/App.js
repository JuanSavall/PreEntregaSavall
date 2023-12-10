import NavBar from "./NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";

function app () {
    return(
        <div className="App">
            <NavBar />   
            <ItemListContainer greeting={'Bienvenidos'} />
        </div>
    )
}

export default App;