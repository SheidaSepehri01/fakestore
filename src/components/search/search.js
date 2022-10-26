import React,{useState} from "react";

export const search = ({list ,childAToParent}) => {
const [searchItems , setSearchItems] =useState([])
  return (
    <div className="search-box" onKeyDown={(e)=>console.log(e.key)}>
      <input type={search} onChange={()=>{
        (e)=>{setSearchItems(list.filter(e.target.value))}
        childAToParent(searchItems)
      } }/>
      <button type="search">O</button>
    </div>
  );
};
