import React, { useState } from "react";

function Item({ name, category }) {

  const [isClassName, setIsClassName] = useState(true)

  const cartClass = isClassName ? "" : "in-cart"
  
  const cartText = isClassName ? "Add to Cart" : "Remove From Cart"

  const changeClassName = () => {
    setIsClassName(!isClassName)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClassName}>{cartText}</button>
    </li>
  );
}

export default Item;
