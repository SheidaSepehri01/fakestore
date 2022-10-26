import "./style/main.css";
import { Header, HeaderMenu } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";
import { CatagoryPage } from "./components/products/CatagoryPage";
import { useState } from "react";
import { UserPage } from "./components/userPage/userPage";
import { Cart } from "./components/cart/cart";
import { Menu } from "./components/menu/menu";

function App() {
  const [data, setData] = useState({
    catagoryClicked: {
      clicked: false,
    },
    userBtnClicked: false,
    cartBtnClicked: false,
    menuBtnClicked: false,
    cart: [],
  });
  function ParentTochild(data) {}

  function ChildToParent(data) {
    //data format{ name: any}
    setData(data);
  }
 
  return (
    <div className="App">
      <Header setClicked={setData} />
      <UserPage clicked={data.userBtnClicked} setClicked={setData} />
      <Cart
        clicked={data.cartBtnClicked}
        setClicked={setData}
        products={data.cart}
        setProducts={setData}
      />
      <Menu clicked={data.menuBtnClicked} setClicked={setData} />
      {data.catagoryClicked.clicked ? (
        <CatagoryPage
          catagoryName={data.catagoryClicked.name}
          link={data.catagoryClicked.link}
          ChildToParent={ChildToParent}
        />
      ) : (
        <HomePage ChildToParent={ChildToParent} />
      )}
    
    </div>
  );
}

export default App;

