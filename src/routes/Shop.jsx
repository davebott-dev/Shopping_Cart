import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import {useOutletContext} from 'react-router-dom';

const API_URL =
  "https://emoji-api.com/categories/food-drink?access_key=38d4704991a4f37bc51f0acf466a11adf3c5ae0c";

const Shop = () => {
  const [cards, setCards] = useState([]);
  const handleBagCount = useOutletContext();

  const spliceArr = (array) => {
    return array.splice(0, 21);
  };

  const searchEmojis = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    let arr = spliceArr(data);
    setCards(arr);
  };

  useEffect(() => {
    searchEmojis();
  }, []);

  //make prices static and consider making the background color static as well?
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
              {card.slug.split("-")[card.slug.split("-").length - 1] ==
              "grapes" ? (
                <div className="bio">
                  Small, round and decatant fruits that grow in the most
                  abundant clusters. They can be either sweet or tart.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "melon" ? (
                <div className="bio">
                  A large, juicy interior with a hard shell shows that the best
                  things in life don't come easy.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "watermelon" ? (
                <div className="bio">
                  A round dome-shaped fruit that is guaranteed to quench your
                  thirst as well as your hunger.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "tangerine" ? (
                <div className="bio">
                  A small, yet sweet citrusy fruit with a loose and easy to peel
                  skin.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "lemon" ? (
                <div className="bio">
                  A small citrusy fruit with a tart flavor, often use for its
                  juice in combination with other fruits/drinks.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "banana" ? (
                <div className="bio">
                  A long, curved type of fruit with an easy to peel skin and a
                  distinct flavor.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "pineapple" ? (
                <div className="bio">
                  A tropical fruit with a spiky exterior and a sweet, tangy
                  flavor
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "mango" ? (
                <div className="bio">
                  A sweet tropical fruit iwth an orangey-red flesh and large pit
                  interior.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "apple" ? (
                <div className="bio">
                  A classic fruit that either be sweet or tart depending on the
                  color.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "pear" ? (
                <div className="bio">
                  A sweet fruit with a grainy texture that usually comes with
                  green or yellowish skin.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "peach" ? (
                <div className="bio">
                  A sweet a juicy fruit with a nice velvety skin that is often
                  associated with another human body part.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "cherries" ? (
                <div className="bio">
                  A small red fruit that is associated with dessert.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "strawberry" ? (
                <div className="bio">
                  A sweet red fruit with a huicy texture and a multitude of
                  seeds on its exterior.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "blueberries" ? (
                <div className="bio">
                  Small round berries with a blast of sweetness and a hint of
                  tart flavor.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "fruit" ? (
                <div className="bio">
                  Dragonfruit - a small brown fruit with a bright green interior
                  known for its cool name and rarity.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "tomato" ? (
                <div className="bio">
                  Although often confused as a vegetable this bright red fruit
                  is used in many culinary dishes.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "olive" ? (
                <div className="bio">
                  A tiny decatant fruit that is served a la carte.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "coconut" ? (
                <div className="bio">
                  A tropical fruit with a hard exterior and sweet milky juices
                  on the inside.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "avocado" ? (
                <div className="bio">
                  A creamy fruit with a lime green and pebbly skin that is often
                  used in Mexican style dishes.
                </div>
              ) : card.slug.split("-")[card.slug.split("-").length - 1] ==
                "eggplant" ? (
                <div className="bio">
                  A dark purple fruit with a spongy flesh that is commonly used
                  by teens to depict another human body part.
                </div>
              ) : null}
              <div className="btnCont">
                <button type="button" className="addToCart" onClick = {handleBagCount}>
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
