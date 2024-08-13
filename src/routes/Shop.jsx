import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const API_URL =
  "https://emoji-api.com/categories/food-drink?access_key=38d4704991a4f37bc51f0acf466a11adf3c5ae0c";

const Shop = () => {
  const [cards, setCards] = useState([]);

  const spliceArr = (array) => {
    return array.splice(0, 21);
  };

  const searchEmojis = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    let arr = spliceArr(data);
    setCards(arr);
    console.log(arr);
  };

  useEffect(() => {
    searchEmojis();
  }, []);

  //add descriptions and transitions/animations for UI
  return (
    <div className="shopCont">
      <div className="shopGrid">
        {cards.map((card, index) => (
          <div
            className="shopCard"
            key={index}
            style={{
              background:
                "#" + Math.floor(Math.random() * 16777215).toString(16),
            }}
          >
            {card.character}

            <div className="info">
              <div className="head">
                <div className="name">
                  {card.slug
                    .split("-")
                    [card.slug.split("-").length - 1].charAt(0)
                    .toUpperCase() +
                    card.slug
                      .split("-")
                      [card.slug.split("-").length - 1].slice(1)}
                </div>
                <div className="price">
                  {isNaN(Number(card.codePoint[card.codePoint.length - 1]))
                    ? "$" + (Math.random() * (3 - 1) + 1).toFixed(2)
                    : "$" +
                      (
                        Math.random() *
                          (Number(card.codePoint[card.codePoint.length - 1]) -
                            1) +
                        1
                      ).toFixed(2)}
                </div>
              </div>
              {card.slug.split("-")[card.slug.split("-").length - 1] =="grapes" ? 
                    <div className="bio">Small, round and decatant fruits that grow in the most abundant clusters. They can be either sweet or tart.</div>
                    :card.slug.split("-")[card.slug.split("-").length - 1] =="melon" ? 
                    <div className="bio">A large, juicy interior with a hard shell shows that the best things in life don't come easy.</div> : null}
              <div className="btnCont">
                <button type="button" className="addToCart">
                  Add to Cart <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
