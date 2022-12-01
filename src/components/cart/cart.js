import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export const Cart = ({ setClicked, clicked, products, setProducts }) => {
  let productPrices = [0];
  const defaultImage = require("../../images/04f1bc09a3a16f5efc155fe9ea829cbc.webp");

  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(productPrices.reduce((sum, num) => sum + num));
  }, [products]);

  return (
    <div
      className="cart-container"
      style={{ display: clicked ? "grid" : "none" }}
    >
      <div className="cart-header">
        <h2>
          Cart <FontAwesomeIcon icon={solid("basket-shopping")} />
        </h2>
        <Link to="/fakestore">
          <button
            className="close"
            onClick={() => {
              setClicked((prevData) => ({
                ...prevData,
                userBtnClicked: false,
                cartBtnClicked: false,
                menuBtnClicked: false,
              }));
            }}
          >
            X
          </button>
        </Link>
      </div>
            {products.length === 0? <div className="empty-cart">
              <h3>You'r cart is empty</h3>
              <FontAwesomeIcon icon={solid("basket-shopping")} size="2xl" />
            </div>:  <ul>
        {products.map((product) => {
          {
            productPrices.push(product.price);
          }
          return (
            <li className="product">
              <h3>{product.title}</h3>
              <img
                src={
                  product.image === "" ||
                  product.image === null ||
                  product.imageSource === null
                    ? defaultImage
                    : product.image
                }
              />
              <div className="card-footer">
                <h3 className="price">
                  {product.price} <FontAwesomeIcon icon={solid("money-bill")} />
                </h3>
                <button
                  type="Remove this item"
                  onClick={() => {
                    productPrices.pop(product.price);

                    setProducts((prevData) => ({
                      ...prevData,
                      cart: products.filter((item) => product !== item),
                    }));
                  }}
                >
                  <FontAwesomeIcon icon={solid("cart-shopping")} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>}
    
      <div className="cart-footer">
        <p className="total">sum :{sum}$</p>
      </div>
    </div>
  );
};
