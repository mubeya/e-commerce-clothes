import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://617947d1aa7f34001740495d.mockapi.io/clothes").then(
      (productData) => setProducts(productData.data)
    );
  }, []);

  const values = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
