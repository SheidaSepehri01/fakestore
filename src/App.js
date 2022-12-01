import "./style/main.css";
import { HomePage } from "./components/homePage/homePage";
import { CatagoryPage } from "./components/product pages/CatagoryPage";
import { useState } from "react";
import { UserPage } from "./components/userPage/userPage";
import { Cart } from "./components/cart/cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    catagoryClicked: {
      clicked: false,
    },
    userBtnClicked: false,
    cartBtnClicked: false,
    menuBtnClicked: false,
    cart: [],
    themeBtn: "day",
  });
  function ParentTochild(data) {}

  function ChildToParent(data) {
    //data format{ name: any}
    setData(data);
  }

  return (
    
      <div className="App">
        <Routes>
          <Route
            path="/fakestore/Login"
            element={
              <UserPage clicked={data.userBtnClicked} setClicked={setData} />
            }
          ></Route>
          <Route
            path="/fakestore/cart"
            element={
              <Cart
                clicked={data.cartBtnClicked}
                setClicked={setData}
                products={data.cart}
                setProducts={setData}
              />
            }
          ></Route>

        
          {data.catagoryClicked.clicked ? (
            <Route
              path="/fakestore/catagoryPage"
              element={
                <CatagoryPage
                  catagoryName={data.catagoryClicked.name}
                  link={data.catagoryClicked.link}
                  ChildToParent={ChildToParent}
                />
              }
            ></Route>
          ) : (
            <Route
              path="/fakestore"
              element={
                <HomePage ChildToParent={ChildToParent} setData={setData} 
                menuClicked={data.menuBtnClicked}
                themeBtn={data.themeBtn}
                />
              }
            ></Route>
          )}
        </Routes>
      </div>
   
  );
}

export default App;
