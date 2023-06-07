import { useState } from "react";
import data from "../Data/Data";
import Item from "./Item";
export default function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const [products, setProducts] = useState(data);
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
    "All",
    "T-Shirts",
    "Shorts",
    "Caps",
    "Jackets",
    "Hoodies",
    "Jackets",
    "Hoodies",
    "Watches",
    "Bags",
    "Trousers",
    "Skirts",
  ];

  return (
    <div className="products">
      <div className="products-buttons">
      <div className="search-icon">
        <button className="fa fa-search"></button>
      </div>
        <ul className="tab-items">
          {tabItems.map((tabItem, index) => (
            <button key={index} onClick={() => filterProducts(tabItem)}>
              {tabItem}
            </button>
          ))}
        </ul>
      </div>
      <div className="products-items">
{products.map((product)=>(
 
        <div className="item-wrapper">
        <Item
            key={product.id} // Add a unique key for each Item component
            category={product.category}
            name={product.name}
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
