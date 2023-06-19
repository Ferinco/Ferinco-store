import { useParams } from "react-router-dom";
import Data from "../Data/Data";
import Navbar from "../Components/Navbar";
export default function Details() {
  const params = useParams();
  console.log(params.id);

  const data = Data.filter((item) => Number(params.id) === item.id);
  const product = data[0];
  console.log(product);
  console.log(Data);
  return (
    <div style={{ paddingTop: "30px" }}>
      <div style={{ width: "90%", margin: "auto" }}>
        <Navbar />
      </div>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
