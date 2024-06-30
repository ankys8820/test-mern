import React from "react";
import ProductDetail from "../features/product/components/ProductDetail";
import NavBar from "../features/navbar/NavBar";

const ProductDetailsPage = () => {
  return (
    <>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
    </>
  );
};

export default ProductDetailsPage;
