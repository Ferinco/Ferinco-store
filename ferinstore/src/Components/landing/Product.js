import { useEffect, useState } from "react";
import data from "../../Data/Data";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";
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
          <div className="products-items">
            {products.map((product) => (
              <div className="item-wrapper full-screen" key={product.id}>
                <Link
                  to={`/details/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="item">
                    <div className="item-image">
                      <img src={product.image} />
                    </div>
                    {product.category === "Top" ? (
                      <div className="item-tag">
                        <p className="tag">{product.tag}</p>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="item-body">
                      <div className="about">
                        <p className="name">{product.name}</p>
                        <h5 className="price">{product.price}</h5>
                        <p className="rate">
                          <i className="fa fa-star" />
                          {product.rating}
                        </p>
                      </div>
                      <div className="shop">
                        <button
                          className="fa fa-heart fa-2x"
                          onClick={isFavourite}
                          style={{
                            color: favourite ? "green" : "rgb(243, 255, 243)",
                            backgroundColor: "transparent",
                            padding: "0",
                          }}
                        ></button>
                        <button className="fa fa-cart"></button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
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
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
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
  .item {
    display: flex;
    flex-direction: column;
    height: 400px;
    &-image {
      height: 300px;
      background-color: rgb(243, 255, 243);
      border-radius: 10px;
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 90%;
        margin: auto !important;
        height: 100%;
        object-fit: contain;
        position: absolute;
      }
    }
    .item-tag {
      position: absolute;
      width: 270px;
      display: flex;
      padding: 10px;
      justify-content: flex-end;
      .tag {
        background-color: $primary-color;
        padding: 5px 10px;
        border-radius: 30px;
      }
    }
    .item-body {
      width: 100%;
      display: flex;
      padding: 5px;
      justify-content: space-between;
      align-items: center;
      height: auto;
      .about {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 80%;
        .name,
        .price,
        .rate {
          margin: 0 !important;
        }
        .rate {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 0 !important;
          i {
            padding-right: 5px;
          }
        }
      }
      .shop {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 100%;
        background: transparent;
        button {
          border: 0;
          padding: 0;
          background-color: transparent;
        }
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
