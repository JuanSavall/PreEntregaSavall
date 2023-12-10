import CartWidget from "../../src/components/CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Toallitas.coco</h3>
            <div>
                <button>kit inicial</button>
                <button>kit regular</button>
                <button>kit diario</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar