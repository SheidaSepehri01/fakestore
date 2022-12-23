import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ThemeContext } from "../../contexts/themeContext";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeProduct } from "../../features/cartSlice";

export const Cart = ({ setClicked, clicked }) => {
  const themeBtn = useContext(ThemeContext);

  const defaultImage = require("../../images/04f1bc09a3a16f5efc155fe9ea829cbc.webp");

  const products = useSelector((state) => state.cart.products);
  const sum = useSelector((state) => state.cart.totalPrice);
const dispatch = useDispatch()

  return (
    <div
      className={
        themeBtn === "night" ? "night cart-container" : "cart-container"
      }
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
      {products.length === 0 ? (
        <div className="empty-cart">
          <h3>You'r cart is empty</h3>
          <FontAwesomeIcon icon={solid("basket-shopping")} size="2xl" />
        </div>
      ) : (
        <ul>
          {products.map((product) => {
           
            return (
              <li className="product"
              key={product.id}
              >
                <h3>{product.title}</h3>
                <img
                  src={
                    product.image === "" ||
                    product.image === null ||
                    product.image === undefined ||
                    product.imageSource === null
                      ? defaultImage
                      : product.image
                  }
                />

                <div className="card-footer">
                  <h3 className="price">
                    {product.price}{" "}
                    <FontAwesomeIcon icon={solid("money-bill")} />
                  </h3>
                  <h3 className="quantity">{product.quantity}</h3>
                  <button
                    type="Remove this item"
                    onClick={() => {
                      dispatch(removeProduct(product))
                    }}
                  >
                    <FontAwesomeIcon icon={solid("cart-shopping")} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="cart-footer">
        <p className="total">sum :{sum}$</p>
      </div>
    </div>
  );
};
