import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();

  if (filteredProducts.length < 1) {
    return (
      <h4
        style={{
          textTransform: "none",
          textAlign: "center",
          paddingTop: "10rem",
          color: "#bb2525",
        }}
      >
        No products match the search criteria
      </h4>
    );
  }

  if (gridView === false) {
    return <ListView products={filteredProducts} />;
  }

  return <GridView products={filteredProducts} />;
};

export default ProductList;
