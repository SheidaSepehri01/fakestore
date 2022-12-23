import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const ProductsCard = ({ link, setProductClicked, childToParent }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState(null);
  const defaultImage = require("../../images/04f1bc09a3a16f5efc155fe9ea829cbc.webp");
  const [items, setItems] = useState([]);
  {
    useEffect(() => GetProductsOfCatagory(link), []);

    function GetProductsOfCatagory(link) {
      fetch(link)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems([result.data.products, result.data.name]);
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }
 
  
  if (error) {
    return (
      <div className="error">
        Opps! {error.message}
        <FontAwesomeIcon icon={solid("face-sad-cry")} size="2xl" />
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="loading">
        Loading...
        <FontAwesomeIcon icon={solid("spinner")} size="2xl" spin />
      </div>
    );
  } else {
    return (
      <div className="productsCard">
        <div className="card-header">
          <h3>{items[1]}</h3>
        </div>
        <ul>
          {items[0].map((item) => (
            <li
              key={ item.id === "" ||
                  item.id === undefined ||
                  item.id === null
                    ? items[0].indexOf(item)
                    : item.id }
              onClick={() => setProductClicked({ item: item, clicked: true })}
            >
              <img
                src={
                  item.image === "" ||
                  item.image === null ||
                  item.imageSource === null
                    ? defaultImage
                    : item.image
                }
                alt={"product Image"}
              />
              <div className="product-info">
                <button className="addToCart">
                  Buy Now
                </button>
                price:{item.price} $
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
/*

*/
