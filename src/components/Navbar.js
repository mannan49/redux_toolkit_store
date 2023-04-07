import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const items = useSelector((state)=>state.cart)
    return ( 
        <>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <h3 style={{margin:0}}>REDUX STORE</h3>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">Cart Items: {items.length} </span>
            </div>
        </div>
        </>
     );
}

export default Navbar;