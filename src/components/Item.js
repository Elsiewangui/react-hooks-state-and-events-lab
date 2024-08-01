import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCart , setIsInCart] = useState(false)
  const handleCartToggle=() => {
    setIsInCart((prevIsInCart) => !prevIsInCart)
  }
  const itemClass= isInCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
