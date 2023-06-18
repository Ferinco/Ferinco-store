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
    <div>
      <div style={{ width: "90%", margin: "auto" }}>
        <Navbar />
      </div>
      <div className="details">
        <div className="details-image">
          <img src={"." + product.image} />
        </div>
        <div className="details-about">
          <h5>{product.name}</h5>
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
