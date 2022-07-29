import React from "react";

function Item({ name, category }) {
  const [cart, setCart] = React.useState(false);
  function handleCart(){
    setCart(cart => !cart);
  }
  return (
    <li className={cart? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={cart? "remove": "add"}>{cart? "Remove from Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
