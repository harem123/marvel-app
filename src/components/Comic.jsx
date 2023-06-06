import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Product(props) {
  const { details } = props;

  return (
    <div className="product">
      <div className="product-image-container">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
            {quantity > 0 && (
            <Button outline onClick={() => onProductDelete(details.id)} className="product-delete">x</Button>
          )}
        </div>
        <Button outline onClick={() => onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}