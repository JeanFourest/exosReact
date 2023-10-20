import React from "react";
import Prod from "./prod";
import "./products.css";

export default function Products() {
  const list = [
    {
      name: "yellow car",
      description: "it's a yellow flipping car",
    },
    {
      name: "red car",
      description: "it's a red flipping car",
    },
    {
      name: "blue car",
      description: "it's a blue flipping car",
    },
    {
      name: "cake car",
      description: "it's a cake flipping car",
    },
    {
      name: "train car",
      description: "it's a train flipping car",
    },
    {
      name: "black car",
      description: "it's a black flipping car",
    },
    {
      name: "toe car",
      description: "it's a toe flipping car",
    },
  ];

  return (
    <div className="productsBody">
      <h1>Products</h1>

      <div className="listOfProducts">
        {list.map((item) => {
          return <Prod name={item.name} description={item.description} />;
        })}
      </div>
    </div>
  );
}
