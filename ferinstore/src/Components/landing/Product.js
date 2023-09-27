import { useEffect, useState } from "react";
import data from "../../Data/Data";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import ProductCard from "../Custom/productCard";
export default function Products() {
  const [activeTab, setActiveTab] = useState("Top");
  const [searchButton, setSearchButton] = useState(false);
  const [activateSearch, setActivateSearch] = useState(false);
  const [products, setProducts] = useState(
    data.filter((item) => item.category === "Top")
  );
  const [favourite, setFavourite] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);
  let inputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    console.log(inputValue);
  };
  useEffect(() => {
    const performSearch = (query) => {
      const filterBySearch = data.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(searchQuery);
      console.log(filterBySearch.length);
      setSearched(filterBySearch);
      console.log(searched);
    };
    performSearch(searchQuery);
  }, [searchQuery]);

  function isFavourite() {
    setFavourite(!favourite);
  }
  const filterProducts = (tabItem) => {
    console.log(products);
    setActiveTab(tabItem);
    if (tabItem === "Top") {
      setProducts(products);
    } else {
      const filteredProducts = data.filter((item) => item.category === tabItem);
      setProducts(filteredProducts);
    }
  };

  const tabItems = [
    "Top",
    "Shirts",
    "Shorts",
    "Caps",
    "Belts",
    "Glasses",
    "Jackets",
    "Hoodies",
    "Watches",
    "Bags",
    "Pants",
    "Skirts",
    "Shoes",
  ];
  return (
    <Wrapper className="products d-flex flex-column">
      <div className="top-buttons d-flex flex-row gap-4">
        <button
          onClick={() => {
            setActivateSearch(true);
            setActiveTab("");
            setSearchButton(true)
          }}
          style={{backgroundColor: searchButton ? "#5cdb95" : "#f5f5f5"}}
        >
          <Icon icon="bx:search" />
        </button>
        <div className="tab-items">
          {tabItems.map((tabItem, index) => (
            <button
              key={index}
              onClick={() => {
                filterProducts(tabItem);
                setActivateSearch(false);
                setSearchButton(false)
                setSearchQuery("");
              }}
              style={{
                backgroundColor:
                  activeTab === tabItem ? "#5cdb95" : "#f5f5f5",
                width: "100px",
              }}
            >
              {tabItem}
            </button>
          ))}
        </div>
      </div>

      {activateSearch ? (
        <div className="search-field d-flex justify-content-between w-100 p-3 mt-5">
          <input
            type="text"
            placeholder="Search by name"
            onChange={inputHandler}
          />
          <Icon icon="ion:filter" color="gray" />
        </div>
      ) : (
        <>
          <div className="products-items mt-5 gap-4">
            {products.map((product) => (
           <ProductCard 
           id = {product.id}
           image= {product.image}
           category = {product.category}
           tag ={product.tag}
           rating = {product.rating}
           name = {product.name}
           price = {product.price}/>
            ))}
          </div>
        </>
      )}
      {activateSearch ? (
        <>
          {searched.length > 0 ? (
            <div className="search-results d-flex justify-content-between align-items-center p-3">
              {searchQuery && (
                <>
                  {searched.map((product) => (
                    <div key={product.index} className="result d-flex flex-column">
                      <div className="image"><img src={product.image}/></div>
                      <div className="d-flex justify-content-center"><p>{product.name}</p></div>
                      <div className="d-flex justify-content-center"><h5 className="price">{product.price}</h5></div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="not-found d-flex justify-content-center align-items-center"><h4>No results found for "{searchQuery}"</h4></div>
          )}
        </>
      ) : (
        ""
      )}

      <div className="products-logos">
        <div className="logo">
          <img src="../Images/Logos/logo (1).png" />
        </div>
        <div className="logo">
          <img src="../Images/Logos/logo (2).png" />
        </div>
        <div className="logo">
          <img src="../Images/Logos/logo (3).png" />
        </div>
        <div className="logo">
          <img src="../Images/Logos/logo (4).png" />
        </div>
        <div className="logo">
          <img src="../Images/Logos/logo (5).png" />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 100px;
  width: 95%;
  margin: auto;
  .top-buttons {
    align-items: baseline;

    button {
      border: 0;
      background: #f5f5f5;
      padding: 3px 15px;
      border-radius: 30px;
    }
    .tab-items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      overflow-x: auto;
      gap: 15px;
      align-items: center;
      &::-webkit-scrollbar {
        margin-top: 5px;
      }
    }
  }
  .products-items {
display: grid;
grid-template-columns: repeat(4, 1fr);
  }
  .products-logos {
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 70px;
      height: 70px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .search-field {
  align-items: center;
  input{
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  outline:  none !important;
  }
  }
  .search-results {
    height: 600px !important;
    border-radius: 20px;
    background-color: #f5f5f5;
    flex-wrap: wrap !important;
  }
  .result{
    height: fit-content;
    background-color:  white;
    .image{
      width: 200px;
      height: 180px;
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .price{
      background-color:#5cdb95;
      padding: 7px;
    }
  }
  .not-found{
    height: 500px !important;
    border-radius: 20px;
    background-color: rgb(243, 255, 243);
  }

`;
