import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  return (
    <div>
      <Layout>
        {/* <table className="table mt-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => {
              return (
                <tr>
                  <td>
                    <img
                      className="product-img"
                      src={item.imageURL}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button>sil</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        {
          cartItems.map((item)=>{
            return(
              <div>{item.name}</div>
            )
          })
        }
      </Layout>
    </div>
  );
};

export default CartPage;
