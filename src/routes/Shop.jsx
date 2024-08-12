import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const API_URL =
  "https://emoji-api.com/categories/food-drink?access_key=38d4704991a4f37bc51f0acf466a11adf3c5ae0c";

const Shop = () => {
  const [cards, setCards] = useState([]);
  const [price, setPrice] = useState([]);


  const spliceArr = (array) => {
    return array.splice(0, 21);
  };

  const searchEmojis = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    let arr = spliceArr(data);
    setCards(arr);
   
  };
//fix this function to retrieve random array of functions properly and add to the shop cards
  const randomPrices = async ()=> {
    let priceArr = [];
    for(let i =0;i<cards.length;i++){
        priceArr.push((Math.random()*(3-1)+1).toFixed(2))  
    }
    setPrice(priceArr)
    console.log(price)
  }

  useEffect(() => {
    searchEmojis();
    randomPrices();
  }, []);

  return (
    <div className="shopCont">
      <div className="shopGrid">
        {cards.map((card, index) => (
          <div className="shopCard" key={index}>
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
                    {price.map((p,index)=> (
                        <div className ="price" key ={index}> 
                            </div>
                    ))}
                
              </div>
              <div className="bio"></div>
              <button type="button">
                Add to Cart <ShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
