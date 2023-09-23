import { useEffect, useState } from "react";
import data from "../../Data/Data";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SearchInput } from "../Custom";
import SearchResults from "../Services/SearchResults";
export default function Products() {
  const [activeTab, setActiveTab] = useState("Top");
  const [activateSearch, setActivateSearch] = useState(false);
  const [products, setProducts] = useState(
    data.filter((item) => item.category === "Top")
  );
  const [favourite, setFavourite] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);
  let inputHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue)
    console.log(inputValue)
      };
  useEffect(() => {
    const performSearch = (query) => {
      const filterBySearch = data.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(searchQuery)
        console.log(filterBySearch.length)
        setSearched(filterBySearch);
        console.log(searched)
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
    <div className="products">
      <div className="products-buttons">
        <button onClick={() => setActivateSearch(true)}>
          <Icon icon="bx:search" />
        </button>
        <div className="tab-items">
          {tabItems.map((tabItem, index) => (
            <button
              key={index}
              onClick={() => {
                filterProducts(tabItem);
                setActivateSearch(false);
              }}
              style={{
                backgroundColor:
                  activeTab === tabItem ? "#5cdb95" : "rgb(243, 255, 243)",
                width: "100px",
              }}
            >
              {tabItem}
            </button>
          ))}
        </div>
      </div>

      <div className="products-items">
        {activateSearch ? (
          <div>
            <input
              type="text"
              placeholder="Search by name"
              onChange={inputHandler}
             
            />
          </div>
        ) : (
          <>
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
          </>
        )}
        {searched.length > 0 ?  (
        <>{
          searchQuery &&
          <> 
        {searched.map((product)=>(
          <div key={product.index}>
            {product.name}
          </div>
        ))}
          </>
        }
        </>
        ) : (
          <div>no results found</div>
        )}
      </div>
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
    </div>
  );
}
