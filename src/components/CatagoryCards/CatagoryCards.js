import React from "react";
import "./catagoryCards.css";
export const CatagoryCards = ({ catagory, imgLink, ChildToParent }) => {
  const links = {
   
   "electronics":'https://fakestoreapi.com/products/category/electronics',
    "jewelery":'https://fakestoreapi.com/products/category/jewelery',
    "men's clothing":'https://fakestoreapi.com/products/category/mensclothing',
    "women's clothing":'https://fakestoreapi.com/products/category/womensclothing'
  
   
  };

  return (
    <div
      className="catagoryBox"
      onClick={() => {
        ChildToParent((prevData)=>({
          ...prevData,
          catagoryClicked: {
            link: links[catagory],
            clicked: true,
            name: catagory,
          },
        }));
      }}
    >
      <h3>{catagory}</h3>
      <div className="imageBox">
        <img src={imgLink} alt={catagory} />
      </div>
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
    </div>
  );
};
