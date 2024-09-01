import React from "react";

const ItemList = ({ items }) => {
  return (
    <>
      <h1>List of items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
