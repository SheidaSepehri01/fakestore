import React from "react";
import { Link } from "react-router-dom";
import "./catagoryCards.css";

export const CatagoryCards = ({ catagory, imgLink, ChildToParent }) => {
  
  const links = {
    electronics: "https://api.storerestapi.com/categories/phone-and-tablets",
    jewelery: "https://api.storerestapi.com/categories/jewlary-and-watches",
    "men's clothing": "https://api.storerestapi.com/categories/mens-fashion",
    "women's clothing":
      "https://api.storerestapi.com/categories/womens-fashion",
  };

  return (
    <div
      className="catagoryBox"
      onClick={() => {
        ChildToParent((prevData) => ({
          ...prevData,
          catagoryClicked: {
            link: links[catagory],
            clicked: true,
            name: catagory,
          },
        }));
      }}
    >
      <Link to="/fakestore/catagoryPage">
        <h3>{catagory}</h3>

        <div className="image-box">
          <img src={imgLink} alt={catagory} />
        </div>
      </Link>

      <Link to="/fakestore/catagoryPage">
        <button
          onClick={() => {
            ChildToParent({
              catagoryClicked: {
                link: links[catagory],
                clicked: true,
                name: catagory,
              },
            });
          }}
          type={`shop for ${catagory}`}
        >
          View more
        </button>
      </Link>
    </div>
  );
};
