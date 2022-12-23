import React, { useContext } from "react";
import { Carousel } from "../carousel/carousel";
import { Footer } from "../footer/footer";
import { CatagoryCards } from "../CatagoryCards/CatagoryCards";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import "./home.css";
import { ThemeContext } from "../../contexts/themeContext";

   export const HomePage = ({ ChildToParent, setData, menuClicked}) => {
  const themeBtn = useContext(ThemeContext)
  return (
    <div className={themeBtn ==='night' ? 'home night':'home'}>
      <Header setClicked={setData} />
      <Menu clicked={menuClicked} setClicked={setData} />
      <div className="home-header">
        <div className="header-slider">
          <Carousel pics={pics.all} />
        </div>
      </div>
      <div className="catagorys">
        {catagorys.map((catagory) => {
          return (
            <CatagoryCards
              catagory={catagory[0]}
              key={catagory[0]}
              imgLink={catagory[1]}
              ChildToParent={ChildToParent}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export const pics = {
  all: [
    require("../../images/all/alina-rubo-HjO5vw_PP5c-unsplash.jpg"),
    require("../../images/all/crystalweed-cannabis-QrK0mgbk2r0-unsplash.jpg"),
    require("../../images/all/jonas-leupe-WargGLQW_Yk-unsplash.jpg"),
    require("../../images/all/kara-eads-buhmhprfo3g-unsplash.jpg"),
    require("../../images/all/nick-fewings-1SsUquHPNT8-unsplash.jpg"),
    require("../../images/all/serghei-savchiuc-_mQ37Rxqb9E-unsplash.jpg"),
    require("../../images/all/marvin-meyer-SYTO3xs06fU-unsplash.jpg"),

  ]
};
const catagorys = [
  [
    "electronics",
    require("../../images/all/surface-gYDNf4vymRk-unsplash.jpg"),
  ],
  [
    "jewelery",
    require("../../images/all/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg"),
  ],
  [
    "men's clothing",
    require("../../images/all/serghei-savchiuc-_mQ37Rxqb9E-unsplash.jpg"),
  ],
  [
    "women's clothing",
    require("../../images/all/kevs-VsnjiMUt7Cg-unsplash.jpg"),
  ],
];
