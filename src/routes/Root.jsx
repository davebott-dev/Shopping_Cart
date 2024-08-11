import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart, Github} from 'lucide-react'

const API_URL = 'https://emoji-api.com/categories/food-drink?access_key=38d4704991a4f37bc51f0acf466a11adf3c5ae0c'


const Root= () => {
  const [bagCount,setBagCount] =useState(0);
  const [cards, setCards] =useState([]);

  function spliceArr(array) {
  
    return array.splice(0,5)
  }

  const searchEmojis = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();

    
    let arr = spliceArr(data)
    setCards(arr)
    console.log(arr)
  }

  useEffect(()=> {
    searchEmojis();
  }, [])

  return (
  <div className ='pageCont'>
    <nav>
      <Link to= "/"> <div className = 'logo'>Fruitology</div></Link>
      <div className = 'links'>
      <Link to ="/">Home</Link>
      <Link to ="shop">Shop</Link>
      <Link to = "cart"><button className="shoppingCart">{bagCount}<ShoppingCart/></button></Link>
      </div>
    </nav>

    <div className="contentCont">
      <div className="content">
      <h1>Tasty and Delicious Fruits For All Occasions</h1>
      <p>From the juiciest berries to exotic tropical finds,
        our selection celebrates the art of fruit cultivation.
        Experience the essence of nature with Fruitology.</p>

        <div className="gridCont">
          {cards.map((card,index)=> (
            <div 
              className="card"
              key={index}
              >
                {card.character}
            </div>
          ))} 
        
        </div>
      </div>
      <button type="button" className="shop">Shop Now</button>
    </div>
    <footer>
      <Link to = "https://github.com/davebott-dev"> <Github className="github"/></Link>
    </footer>  
  </div>
  )
}

export default Root
