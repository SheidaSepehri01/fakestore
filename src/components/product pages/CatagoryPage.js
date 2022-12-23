import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsCard } from "./itemCard";
import { ProductPage } from "./productPage";
import "./products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { ThemeContext } from "../../contexts/themeContext";

export const CatagoryPage = ({ link, ChildToParent }) => {
  const themeBtn = useContext(ThemeContext)
  const [productClicked, setProductClicked] = useState(() => {
    return {
      clicked: false,
      item: {
        image: [],
        rating: {
          rate: 0,
        },
      },
    };
  });
  
  return (
    <div className={themeBtn === 'night' ?"night catagory-page":"catagory-page"}>
      <ProductsCard
        link={link}
        setProductClicked={setProductClicked}
        ChildToParent={ChildToParent}
      />
      <Link to="/fakestore">
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
      </Link>
      <ProductPage
        product={productClicked.item}
        clicked={productClicked.clicked}
        setProductClicked={setProductClicked}
        ChildToParent={ChildToParent}
      />
    </div>
  );
};
