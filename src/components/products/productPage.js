import React, { useState } from "react";
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
 /*
برا قطعی نت
این object product 
رو ساختم 
let product={
  id: "1",
images: [
  require("../../images/all/camille-brodard-VxAwTeiqDao-unsplash.jpg"),
  require("../../images/all/crystalweed-cannabis-QrK0mgbk2r0-unsplash.jpg"),
],
title: "glasses",
thumbnail: require("../../images/all/crystalweed-cannabis-QrK0mgbk2r0-unsplash.jpg"),
price: 66.9,
brand: "gucci",
description:
  "lorm ipsom la;fjejf l;iuel;sdnfljuie elji l;hef vihfd l;jie lkjfi",
rating: 4.3,
stock: 5,
} 
*/


const [click, setClick] = useState({
    addToCart: false,
  });
  return (
    <div
      style={{ display: clicked ? "grid" : "none" }}
      className="product-page"
    >
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

      <div className="product">
        <div className="image-box">
          <h2 className="title">{product.title}</h2>
          <div class="product-image">
            <img src={product.image} />
          </div>
        </div>
        <div className="description">
          <div>
            <h4>title: {product.title}</h4>
            <p>{product.description}</p>
          </div>

          <ul className="product-info">
            <li>
              <FontAwesomeIcon icon={solid("money-bill")} />
              price : {product.price}
            </li>
            <li>
              <FontAwesomeIcon icon={solid("star")} />
              {product.rating.rate}
            </li>
          </ul>
          {click.addToCart ? (
            <button
              className="add-to-cart"
              onClick={() => {
                setClick((prev) => ({ ...prev, addToCart: true }));
                ChildToParent((prevData) => ({
                  ...prevData,
                  cart: [
                    ...prevData.cart,
                    product
                  ],
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
