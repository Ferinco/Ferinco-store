import { useParams } from "react-router-dom";
import { useState } from "react";
import Data from "../Data/Data";
import Navbar from "../Components/Navbar";
import { styled } from "styled-components";
import ActionBar from "../Components/Custom/Actionbar";
import Footer from "../Components/Custom/Footer";
export default function Details() {
  const params = useParams();
  console.log(params.id);
  const data = Data.filter((item) => Number(params.id) === item.id);
  const product = data[0];
  const relateds = Data.filter((item)=> item.category === product.category)
  const [cartField, setCartField] = useState(false)
  
  console.log(relateds)
  console.log(product);
  console.log(Data);
  function addToCart(){

  }
  return (
    <div style={{display:"flex", flexDirection:"column"}}>

    
    <DETAILS style={{ paddingTop: "30px" }}>
      <div className="left">
        <Navbar/>
        <div className="details">
        <div className="details-image">
          <img src={"." + product.image} />
        </div>
        <div className="details-about">
          <div className="header">
            <h5>{product.name}</h5>{" "}
            <button
              className="fa fa-heart fa-2x"
              style={{
                backgroundColor: "transparent",
                padding: "0",
                color: "#f5f5f5"
              }}
            ></button>
          </div>
          <p>{product.category}</p>
          <h5>{product.price}</h5>
          <p className="rate">
            <i className="fa fa-star" />
            {product.rating}
          </p>
          <div className="button">
            <button onClick={addToCart}>Add to Cart</button>
            <button>Shop Now</button>
          </div>
        </div>
        </div>
      </div>
      <div className="right">
        <ActionBar/>
        <div className="related">

          {relateds.map((related)=>(
             <div className="image">
             <img src={"." +  related.image} />
           </div>
          ))}
        </div>
      </div>
    </DETAILS>
      <Footer/>
    </div>
  );
}
const DETAILS = styled.div `
width: 90%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 90vh;
gap: 20px;
.left{
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  width: 70%;
  .details{
  display: flex;
  width: 100%;
  margin: auto;
  margin-top: 20px !important;
  height: 100%;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  &-about{
    height: 60% !important;
    margin: auto !important;
  }
  button{
    border: 0;
  }
  .button{
    display: flex;
    flex-direction: row;
    gap: 10px;

  }
  &-image{
    width: 50%;
    height: 400px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }
  &-about{
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between !important;
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .button{
width: 100%;
margin-top: 20px;
button{
  width: 100%;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  background-color: $primary-color;
}
    }
  }
}
}
.right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100% !important;
  .related{
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-top: 20px;
display: flex;
flex-direction: column;
overflow: auto;
gap: 10px;
.image{
  width: 80%;
  margin: auto;
  height: 400px;
  
  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
  }
}
  }
}
`