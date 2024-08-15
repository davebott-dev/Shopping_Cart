import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Root = () => {
  const [bagCount, setBagCount] = useState(0);
  const [showShop, setShowShop] = useState(false);
  //add use state to add items to cart --use state will be an empty array to start
  //use outlet context to allow child buttons to update this 

  const handleBagCount = () => {
    setBagCount((prev) => prev + 1);
  };

  const handleShowShop = () => {
    setShowShop(!showShop);
  };

  return (
    <div className={showShop ? "pageCont active" : "pageCont"}>
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
            <div className="items"></div>
            <div>Total: $0.00</div>
            <button
              type="button"
              className="checkout"
              onClick={() => {
                alert(
                  "Congrats! If this was a real store you would have made a purchase."
                );
                setBagCount(0);
                
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <Outlet context={handleBagCount} />
    </div>
  );
};

export default Root;
