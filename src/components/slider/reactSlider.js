import React, { useState} from "react";
import "./style.css";

export const Slider = ({pics , defaultpic ,key}) => {
  const [src , setSrc] = useState(defaultpic);

  return (
    <div className="slider">
      <div className="full-img">
        <img className="big-img" src={src} />
      </div>
      <div className="thumb" >
        {pics.map((pic)=>{
          return(
        <img src={pic} key={key} onClick={() => setSrc(`${pic}`)}/>
          )
        })}
      </div>
    </div>
  );
};