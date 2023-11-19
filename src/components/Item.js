import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleCart = () => {
    setInCart(!inCart);
  };

  return (
    
    <li className={inCart ? 'in-cart' : ''}>
    Item Name
    <button onClick={handleCart}>
      {inCart ? 'Remove From Cart' : 'Add to Cart'}
    </button>
  </li>
  );
}

export default Item;
