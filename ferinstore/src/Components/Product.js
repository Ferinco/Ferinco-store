import { useState } from "react";
import data from "../Data/Data";
import Item from "./Item";
export default function Products() {
  const [activeTab, setActiveTab] = useState("Top");
  const [products, setProducts] = useState(data.filter((item)=> item.category === "Top"));
const filterProducts=(tabItem)=>{
    console.log(products)
    setActiveTab(tabItem)
    if (tabItem === "All") {
        setProducts(products)
    }
    else{
        const filteredProducts = data.filter((item)=> item.category === tabItem)
        setProducts(filteredProducts)
    }
}
  const tabItems = [
    "Top",
    "T-Shirts",
    "Shorts",
    "Caps",
    "Belts",
    "Hats",
    "Jackets",
    "Hoodies",
    "Watches",
    "Bags",
    "Trousers",
    "Skirts",
    "Shoes"
    
  ];

  return (
    <div className="products">
      <div className="products-buttons">
      <div className="search-icon">
        <button className="fa fa-search"></button>
      </div>
        <ul className="tab-items">
          {tabItems.map((tabItem, index) => (
            <button key={index} onClick={() => filterProducts(tabItem)}
            style={{
                backgroundColor : activeTab === tabItem ? "rgb(181, 240, 181)" : "transparent"
            }}>
              {tabItem}
            </button>
          ))}
        </ul>
      </div>
      <div className="products-items">
{products.map((product)=>(
 
        <div className="item-wrapper">
        <Item
            key={product.id}
            name={product.name}
            tag={product.tag }
            price={product.price}
            rating={product.rating}
            img={product.image}
          />
        </div>
        

    
))}
   
      </div>
    </div>
  );
}
