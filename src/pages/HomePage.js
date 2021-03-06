import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import { collection, getDocs } from 'firebase/firestore/lite';
import fireDB from "../fireConfig";
// import { fireproducts } from '../firecommerce-products';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const users = await getDocs(collection(fireDB, 'Products'));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      setProducts(productsArray);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
    localStorage.getItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  return (
    <div>
      <Layout>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        className="product-img"
                        src={product.imageURL}
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{product.price} AZN</h2>
                    <div className="d-flex">
                      <button className="mx-2" onClick={() => addToCart()}>
                        Add to Cart
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/Productinfo/${product.id}`);
                        }}
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default HomePage;
