import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Root = () => {
  const [bagCount, setBagCount] = useState(0);
  const [showShop, setShowShop] = useState(false);
  const [shopList, setShopList] = useState([]);
  const [total, setTotal] = useState(0);

  const createItemList = () => {
    return shopList.map((item, index) => (
      <div className="item" key={index}>
        <div>
          {item.character}
          {item.name}
        </div>
        <div>{item.price}</div>
      </div>
    ));
  };

  const handleShowShop = () => {
    setShowShop(!showShop);
  };

  return (
    <div className={showShop ? " active" : "notActive"}>
      <nav>
        <Link to="/">
          {" "}
          <div className="logo">Fruitology</div>
        </Link>
        <div className="links">
          <Link to="/" className="homeLink">
            Home
          </Link>
          <Link to="shop" className="shopLink">
            Shop
          </Link>
          <button className="shoppingCart" onClick={handleShowShop}>
            {bagCount}
            <ShoppingCart />
          </button>
        </div>
      </nav>
      {showShop && (
        <div className="sidebar">
          <div className="sidebarHead">
            <div>
              <h2>Bag</h2>
            </div>
            <button onClick={handleShowShop} className="shop">
              Close
            </button>
          </div>
          <div className="sidebarBody">
            <div className="items">{createItemList()}</div>
            <div>
              <strong>Total: ${total}</strong>
            </div>
            <button
              type="button"
              className="checkout"
              onClick={() => {
                alert(
                  `Congrats! If this was a real store you would have made a purchase for ${
                    "$" + total
                  }`
                );
                setBagCount(0);
                setShopList([]);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <Outlet context={[shopList, setShopList, setBagCount, setTotal]} />
    </div>
  );
};

export default Root;
