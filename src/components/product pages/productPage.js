import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "../slider/reactSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export const ProductPage = ({
  product,
  clicked,
  setProductClicked,
  ChildToParent,
}) => {
  const [click, setClick] = useState({
    addToCart: false,
  });

  const defaultImage = require("../../images/04f1bc09a3a16f5efc155fe9ea829cbc.webp");
  const defaultRate = 0;
  console.log( product.rating)
  return (
    <div
      style={{ display: clicked ? "grid" : "none" }}
      className="product-page"
    >
      <Link to="/fakestore/catagoryPage">
        <button
          className="close"
          onClick={() =>
            setProductClicked((prevProductClicked) => ({
              ...prevProductClicked,
              clicked: false,
            }))
          }
        >
          <FontAwesomeIcon icon={solid("arrow-left")} />
        </button>
      </Link>

      <div className="product">
        <div className="image-box">
          <h2 className="title">
            {product.title === null ||
            product.title === undefined ||
            product.title === ""
              ? "No title for this product :("
              : product.title}
          </h2>
          <div className="product-image">
            <img
              src={
                product.image === null ||
                product.image === undefined ||
                product.image === ""
                  ? defaultImage
                  : product.image
              }
              alt={
                product.image === null ||
                product.image === undefined ||
                product.image === ""
                  ? "sorry our api provider is tasetless and didn't provide any images for this product"
                  : "product Image."
              }
            />
          </div>
        </div>
        <div className="description">
          <div>
            <h4>
              title:{" "}
              {product.title === null ||
              product.title === undefined ||
              product.title === ""
                ? "No title for this product :("
                : product.title}
            </h4>
            <p>
              {product.description === null || product.description === ""
                ? "Sorry Api provider is tasteless and didn't provide any description for this product."
                : product.description}
            </p>
          </div>

          <ul className="product-info">
            <li>
              <FontAwesomeIcon icon={solid("money-bill")} />
              price : {product.price}
            </li>
            <li>
              <FontAwesomeIcon icon={solid("star")} />
              {
                product.rating === undefined
               ? defaultRate : product.rating
              }
            </li>
          </ul>
          {click.addToCart ? (
            <button
              className="add-to-cart"
              onClick={() => {
                setClick((prev) => ({ ...prev, addToCart: true }));
                ChildToParent((prevData) => ({
                  ...prevData,
                  cart: [...prevData.cart, product],
                }));
              }}
            >
              Added To Cart
              <FontAwesomeIcon icon={regular("square-check")} />
            </button>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => {
                setClick((prev) => ({ ...prev, addToCart: true }));
                ChildToParent((prevData) => ({
                  ...prevData,
                  cart: [...prevData.cart, product],
                }));
              }}
            >
              Add To Cart
              <FontAwesomeIcon icon={solid("cart-plus")} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
/*

    
*/
