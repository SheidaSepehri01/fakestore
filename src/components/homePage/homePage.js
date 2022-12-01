import React, { useState } from "react";
import { Carousel } from "../carousel/carousel";
import { Footer } from "../footer/footer"
import { CatagoryCards } from "../CatagoryCards/CatagoryCards";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import "./home.css";

export const HomePage = ({ChildToParent , setData, menuClicked, themeBtn}) => {
  return (
    <>
      <Header setClicked={setData} />
      <Menu
            clicked={menuClicked}
            setClicked={setData}
            themeBtn={themeBtn}
          />
      <div className="home-header">
        <div className="header-slider">
          <Carousel pics={pics.all} />
        </div>
      </div>
      <div className="catagorys">
        {catagorys.map((catagory) => {
          return(
          <CatagoryCards
            catagory={catagory[0]}
            key={catagory[0]}
            imgLink={catagory[1]}
            ChildToParent={ChildToParent}
          />);
        })}
      </div>
      <Footer />
    </>
  );
};
export const pics = {
  all: [
    require("../../images/all/camille-brodard-VxAwTeiqDao-unsplash.jpg"),
    require("../../images/all/crystalweed-cannabis-QrK0mgbk2r0-unsplash.jpg"),
    require("../../images/all/jonas-leupe-WargGLQW_Yk-unsplash.jpg"),
    require("../../images/all/kara-eads-buhmhprfo3g-unsplash.jpg"),
    require("../../images/all/nick-fewings-1SsUquHPNT8-unsplash.jpg"),
    require("../../images/all/serghei-savchiuc-_mQ37Rxqb9E-unsplash.jpg"),
  ],
  fasion: [
    require("../../images/fasion/alina-rubo-HjO5vw_PP5c-unsplash.jpg"),
    require("../../images/fasion/camille-paralisan-LgoehzzFAMA-unsplash.jpg"),
    require("../../images/fasion/content-pixie-ZB4eQcNqVUs-unsplash.jpg"),
    require("../../images/fasion/darklammur-oRgeDVPL1ks-unsplash.jpg"),
    require("../../images/fasion/kevs-VsnjiMUt7Cg-unsplash.jpg"),
  ],
  ferniture: [
    require("../../images/ferniture/inside-weather-OzqieLcs464-unsplash.jpg"),
    require("../../images/ferniture/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"),
  ],
  tech: [
    require("../../images/tech/carol-magalhaes-dSsXm15D9hg-unsplash.jpg"),
    require("../../images/tech/georgi-dyulgerov-ZdlwPqLQcGU-unsplash.jpg"),
    require("../../images/tech/jonas-leupe-wK-elt11pF0-unsplash.jpg"),
    require("../../images/tech/marvin-meyer-SYTO3xs06fU-unsplash.jpg"),
  ],
};
const catagorys = [
  ["electronics",require("../../images/tech/surface-gYDNf4vymRk-unsplash.jpg")],
  ["jewelery",require("../../images/fasion/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg")],
  ["men's clothing" , require("../../images/all/serghei-savchiuc-_mQ37Rxqb9E-unsplash.jpg")],
  ["women's clothing",require("../../images/fasion/content-pixie-ZB4eQcNqVUs-unsplash.jpg")]
];
