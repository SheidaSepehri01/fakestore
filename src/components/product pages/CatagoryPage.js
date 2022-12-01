import React, { useState } from "react";
import { ProductsCard } from "./itemCard";
import { ProductPage } from "./productPage";
import "./products.css";
import "./responsive.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export const CatagoryPage = ({ catagoryName, link, ChildToParent }) => {
  const [productClicked, setProductClicked] = useState(() => {
    return {
      clicked: false,
      item: {
        image: [],
        rating:{
          rate:0
        }
      },
    };
  });
console.log(productClicked.item)
  return (
    <div className="catagory-page">
      <ProductsCard
        link={link}
        setProductClicked={setProductClicked}
        ChildToParent={ChildToParent}
      />
      <button
        className="close"
        onClick={() =>
          ChildToParent((prevdata) => ({
            ...prevdata,
            catagoryClicked: {
              clicked: false,
            },
            userBtnClicked: false,
            cartBtnClicked: false,
            menuBtnClicked: false,
          }))
        }
      >
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </button>
      <ProductPage
        product={productClicked.item}
        clicked={productClicked.clicked}
        setProductClicked={setProductClicked}
        ChildToParent={ChildToParent}
      />
    </div>
  );
};
