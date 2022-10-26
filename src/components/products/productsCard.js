import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export const ProductsCard = ({ link, setProductClicked, childToParent }) => {
  
  /*
  در صورت قطعی نت isLoaded 
  مقدار پیش فرض 
  true 
  بگیره
  */
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [error, setError] = useState(null);
  const [items, setItems] = useState([
    
      /*
      مقدار state
      در صورت قطعی نت
       {
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
      
    },
      */
   
  ]);
/*
    نت قطعه 
    useEffect غیر فعال بشه  
    */
  {
useEffect(() => GetProductsOfCatagory(link), []);

  function GetProductsOfCatagory(link) {
    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  }
  console.log(items
    ) 
 


  if (error) {
    return (
      <div className="error">Opps! {error.message}</div>
    );
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="productsCard">
        <div className="card-header">
          <h3>{items[0].category}</h3>
        </div>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => setProductClicked({ item: item, clicked: true })}
            >
              <img src={item.image} />
              <div className="product-info">
                <button className="addToCart">
                  <FontAwesomeIcon icon={solid("cart-plus")} />
                </button>
                price:{item.price}$
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
