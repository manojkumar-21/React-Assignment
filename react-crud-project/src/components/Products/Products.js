import React, {useState , useEffect} from 'react';
import axios from 'axios'
import './Products.css'
import { Link } from 'react-router-dom';



const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartcount, setCartcount] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadproducts()
  }, [])
  
  useEffect(() => {
    localStorage.setItem("mycartItems", JSON.stringify(cartItems));    
    const count = JSON.parse(localStorage.getItem("mycartItems")).length;
    setCartcount(count);
  }, [cartItems]);

  const loadproducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data)
  }

  const addToCart = (product) => {
    // Find if the product already exist in the cartItems state
    const exist = cartItems.find((x) => x.id === product.id);
    
     if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
       setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

    
  return (
   
    <div>
      <div className='btn-cart'>
        <Link className='btn btn-outline-primary btn-cart' to="/cart">Cart ({cartcount}) </Link>
      </div>
    <div className="card-container">
      {
        products.map((product, index) => (
          <div className="card shadow p-3 mb-5 bg-white rounded" key={product.id}>
            <img className="card-img-top" src={product.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{product.category}</li>
              <li className="list-group-item"><span> RS:</span> {product.price}</li>
            </ul>
            <div className="card-body">
              <button className="btn btn-secondary" onClick={() => {addToCart(product)}}>Add to Cart</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Products;
