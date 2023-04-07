import { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchProdcuts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function Products() {
  
  const dispatch =  useDispatch();
  const { data: products, status } = useSelector( (state)=>state.product )

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProdcuts())

    // const fetchProdcuts = async () => {
    //   const res = await fetch("https://api.escuelajs.co/api/v1/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProdcuts();
  }, []);

  const handleAdd = (product) =>{
    dispatch(add(product))
  }
  if( status===STATUSES.LOADING ){
    return <h1>Loading ......</h1>
  }
  if( status===STATUSES.ERROR ){
    return <h1>SOMETHING WENT WRONG</h1>
  }

  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.category.image} alt="This is Image" />
            <h4>{product.title}</h4>
            <h5>$ {product.price}</h5>
            <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
