import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemCategory, setItemCategory] = React.useState("All")
  function handleItemFilter(event){
    setItemCategory(event.target.value)
  }
  const filterItem = items.filter(item => {
      if(itemCategory === "All"){
        return true;
      }else{
        return (itemCategory === item.category)
      }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleItemFilter}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
